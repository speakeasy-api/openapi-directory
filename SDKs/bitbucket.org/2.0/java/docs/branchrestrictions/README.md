# branchRestrictions

## Overview

Repository owners and administrators can set branch management
rules on a repository that control what can be pushed by whom.
Through these rules, you can enforce a project or team
workflow. For example, owners or administrators can:

* Limit push powers
* Prevent branch deletion
* Prevent history re-writes (Git only)


### Available Operations

* [deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId](#deleterepositoriesworkspacereposlugbranchrestrictionsid) - Delete a branch restriction rule
* [getRepositoriesWorkspaceRepoSlugBranchRestrictions](#getrepositoriesworkspacereposlugbranchrestrictions) - List branch restrictions
* [getRepositoriesWorkspaceRepoSlugBranchRestrictionsId](#getrepositoriesworkspacereposlugbranchrestrictionsid) - Get a branch restriction rule
* [postRepositoriesWorkspaceRepoSlugBranchRestrictions](#postrepositoriesworkspacereposlugbranchrestrictions) - Create a branch restriction rule
* [putRepositoriesWorkspaceRepoSlugBranchRestrictionsId](#putrepositoriesworkspacereposlugbranchrestrictionsid) - Update a branch restriction rule

## deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId

Deletes an existing branch restriction rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest req = new DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest("error", "deserunt", "suscipit");            

            DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse res = sdk.branchRestrictions.deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId(req, new DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugBranchRestrictions

Returns a paginated list of all branch restrictions on the
repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest req = new GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest("iure", "magnam") {{
                kind = "debitis";
                pattern = "ipsa";
            }};            

            GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse res = sdk.branchRestrictions.getRepositoriesWorkspaceRepoSlugBranchRestrictions(req, new GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedBranchrestrictions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugBranchRestrictionsId

Returns a specific branch restriction rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest req = new GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest("delectus", "tempora", "suscipit");            

            GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse res = sdk.branchRestrictions.getRepositoriesWorkspaceRepoSlugBranchRestrictionsId(req, new GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.branchrestriction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugBranchRestrictions

Creates a new branch restriction rule for a repository.

`kind` describes what will be restricted. Allowed values include:
`push`, `force`, `delete` and `restrict_merges`.

Different kinds of branch restrictions have different requirements:

* `push` and `restrict_merges` require `users` and `groups` to be
  specified. Empty lists are allowed, in which case permission is
  denied for everybody.

The restriction applies to all branches that match. There are
two ways to match a branch. It is configured in `branch_match_kind`:

1. `glob`: Matches a branch against the `pattern`. A `'*'` in
   `pattern` will expand to match zero or more characters, and every
   other character matches itself. For example, `'foo*'` will match
   `'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all
   branches.
2. `branching_model`: Matches a branch against the repository's
   branching model. The `branch_type` controls the type of branch
   to match. Allowed values include: `production`, `development`,
   `bugfix`, `release`, `feature` and `hotfix`.

The combination of `kind` and match must be unique. This means that
two `glob` restrictions in a repository cannot have the same `kind` and
`pattern`. Additionally, two `branching_model` restrictions in a
repository cannot have the same `kind` and `branch_type`.

`users` and `groups` are lists of users and groups that are except from
the restriction. They can only be configured in `push` and
`restrict_merges` restrictions. The `push` restriction stops a user
pushing to matching branches unless that user is in `users` or is a
member of a group in `groups`. The `restrict_merges` stops a user
merging pull requests to matching branches unless that user is in
`users` or is a member of a group in `groups`. Adding new users or
groups to an existing restriction should be done via `PUT`.

Note that branch restrictions with overlapping matchers is allowed,
but the resulting behavior may be surprising.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest req = new PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest(                new java.util.HashMap<String, Object>() {{
                                put("minus", "placeat");
                                put("voluptatum", "iusto");
                            }}, "excepturi", "nisi");            

            PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse res = sdk.branchRestrictions.postRepositoriesWorkspaceRepoSlugBranchRestrictions(req, new PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.branchrestriction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoriesWorkspaceRepoSlugBranchRestrictionsId

Updates an existing branch restriction rule.

Fields not present in the request body are ignored.

See [`POST`](/cloud/bitbucket/rest/api-group-branch-restrictions/#api-repositories-workspace-repo-slug-branch-restrictions-post) for details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest req = new PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest(                new java.util.HashMap<String, Object>() {{
                                put("temporibus", "ab");
                                put("quis", "veritatis");
                                put("deserunt", "perferendis");
                                put("ipsam", "repellendus");
                            }}, "sapiente", "quo", "odit");            

            PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse res = sdk.branchRestrictions.putRepositoriesWorkspaceRepoSlugBranchRestrictionsId(req, new PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.branchrestriction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
