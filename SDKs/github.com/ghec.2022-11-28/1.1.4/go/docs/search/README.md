# Search

## Overview

Look for stuff on GitHub.

### Available Operations

* [SearchCode](#searchcode) - Search code
* [SearchCommits](#searchcommits) - Search commits
* [SearchIssuesAndPullRequests](#searchissuesandpullrequests) - Search issues and pull requests
* [SearchLabels](#searchlabels) - Search labels
* [SearchRepos](#searchrepos) - Search repositories
* [SearchTopics](#searchtopics) - Search topics
* [SearchUsers](#searchusers) - Search users

## SearchCode

Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#pagination).

When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#text-match-metadata).

For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:

`q=addClass+in:file+language:js+repo:jquery/jquery`

This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.

#### Considerations for code search

Due to the complexity of searching code, there are a few restrictions on how searches are performed:

*   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
*   Only files smaller than 384 KB are searchable.
*   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/search#search-code>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchCode(ctx, operations.SearchCodeRequest{
        Order: shared.OrderEnumAsc.ToPointer(),
        Page: sdk.Int64(98578),
        PerPage: sdk.Int64(101284),
        Q: "praesentium",
        Sort: operations.SearchCodeSortEnumIndexed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCode200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchCommits

Find commits via various criteria on the default branch (usually `main`). This method returns up to 100 results [per page](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#pagination).

When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match
metadata](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#text-match-metadata).

For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:

`q=repo:octocat/Spoon-Knife+css`

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/search#search-commits>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchCommits(ctx, operations.SearchCommitsRequest{
        Order: shared.OrderEnumDesc.ToPointer(),
        Page: sdk.Int64(854800),
        PerPage: sdk.Int64(313695),
        Q: "iure",
        Sort: operations.SearchCommitsSortEnumCommitterDate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCommits200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchIssuesAndPullRequests

Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#pagination).

When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted
search results, see [Text match metadata](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#text-match-metadata).

For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.

`q=windows+label:bug+language:python+state:open&sort=created&order=asc`

This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.

**Note:** For [user-to-server](https://docs.github.com/enterprise-cloud@latest//developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) GitHub App requests, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see "[Searching only issues or pull requests](https://docs.github.com/enterprise-cloud@latest//github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/search#search-issues-and-pull-requests>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchIssuesAndPullRequests(ctx, operations.SearchIssuesAndPullRequestsRequest{
        Order: shared.OrderEnumDesc.ToPointer(),
        Page: sdk.Int64(301701),
        PerPage: sdk.Int64(882157),
        Q: "nulla",
        Sort: operations.SearchIssuesAndPullRequestsSortEnumUpdated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchIssuesAndPullRequests200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchLabels

Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#pagination).

When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#text-match-metadata).

For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:

`q=bug+defect+enhancement&repository_id=64778136`

The labels that best match the query appear first in the search results.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/search#search-labels>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchLabels(ctx, operations.SearchLabelsRequest{
        Order: shared.OrderEnumAsc.ToPointer(),
        Page: sdk.Int64(505799),
        PerPage: sdk.Int64(315465),
        Q: "animi",
        RepositoryID: 599581,
        Sort: operations.SearchLabelsSortEnumCreated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchLabels200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchRepos

Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#pagination).

When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#text-match-metadata).

For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:

`q=tetris+language:assembly&sort=stars&order=desc`

This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/search#search-repositories>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchRepos(ctx, operations.SearchReposRequest{
        Order: shared.OrderEnumDesc.ToPointer(),
        Page: sdk.Int64(341405),
        PerPage: sdk.Int64(909093),
        Q: "laboriosam",
        Sort: operations.SearchReposSortEnumStars.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchRepos200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchTopics

Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#pagination). See "[Searching topics](https://docs.github.com/enterprise-cloud@latest//articles/searching-topics/)" for a detailed list of qualifiers.

When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#text-match-metadata).

For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:

`q=ruby+is:featured`

This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/search#search-topics>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchTopics(ctx, operations.SearchTopicsRequest{
        Page: sdk.Int64(505473),
        PerPage: sdk.Int64(697729),
        Q: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchTopics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchUsers

Find users via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#pagination).

When searching for users, you can get text match metadata for the issue **login**, public **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#text-match-metadata).

For example, if you're looking for a list of popular users, you might try this query:

`q=tom+repos:%3E42+followers:%3E1000`

This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/search#search-users>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchUsers(ctx, operations.SearchUsersRequest{
        Order: shared.OrderEnumAsc.ToPointer(),
        Page: sdk.Int64(809567),
        PerPage: sdk.Int64(175275),
        Q: "consequatur",
        Sort: operations.SearchUsersSortEnumFollowers.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchUsers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
