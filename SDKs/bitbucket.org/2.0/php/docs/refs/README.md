# refs

## Overview

The refs resource allows you access branches and tags in a repository.
By default, results will be in the order the underlying source control
system returns them and identical to the ordering one sees when running
"$ git show-ref". Note that this follows simple lexical ordering of the
 ref names.


### Available Operations

* [deleteRepositoriesWorkspaceRepoSlugRefsBranchesName](#deleterepositoriesworkspacereposlugrefsbranchesname) - Delete a branch
* [deleteRepositoriesWorkspaceRepoSlugRefsTagsName](#deleterepositoriesworkspacereposlugrefstagsname) - Delete a tag
* [getRepositoriesWorkspaceRepoSlugRefs](#getrepositoriesworkspacereposlugrefs) - List branches and tags
* [getRepositoriesWorkspaceRepoSlugRefsBranches](#getrepositoriesworkspacereposlugrefsbranches) - List open branches
* [getRepositoriesWorkspaceRepoSlugRefsBranchesName](#getrepositoriesworkspacereposlugrefsbranchesname) - Get a branch
* [getRepositoriesWorkspaceRepoSlugRefsTags](#getrepositoriesworkspacereposlugrefstags) - List tags
* [getRepositoriesWorkspaceRepoSlugRefsTagsName](#getrepositoriesworkspacereposlugrefstagsname) - Get a tag
* [postRepositoriesWorkspaceRepoSlugRefsBranches](#postrepositoriesworkspacereposlugrefsbranches) - Create a branch
* [postRepositoriesWorkspaceRepoSlugRefsTags](#postrepositoriesworkspacereposlugrefstags) - Create a tag

## deleteRepositoriesWorkspaceRepoSlugRefsBranchesName

Delete a branch in the specified repository.

The main branch is not allowed to be deleted and will return a 400
response.

The branch name should not include any prefixes (e.g.
refs/heads).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest();
    $request->name = 'Dr. Maryann Howe';
    $request->repoSlug = 'vitae';
    $request->workspace = 'accusamus';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->refs->deleteRepositoriesWorkspaceRepoSlugRefsBranchesName($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugRefsTagsName

Delete a tag in the specified repository.

The tag name should not include any prefixes (e.g. refs/tags).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameRequest();
    $request->name = 'Ricky Cole';
    $request->repoSlug = 'voluptas';
    $request->workspace = 'minima';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->refs->deleteRepositoriesWorkspaceRepoSlugRefsTagsName($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugRefs

Returns the branches and tags in the repository.

By default, results will be in the order the underlying source control system returns them and identical to
the ordering one sees when running "$ git show-ref". Note that this follows simple
lexical ordering of the ref names.

This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2",
"branch10", "v9", "v10", "v11"].

Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugRefsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugRefsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugRefsRequest();
    $request->q = 'nobis';
    $request->repoSlug = 'dolorum';
    $request->sort = 'adipisci';
    $request->workspace = 'minus';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugRefsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->refs->getRepositoriesWorkspaceRepoSlugRefs($request, $requestSecurity);

    if ($response->paginatedRefs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugRefsBranches

Returns a list of all open branches within the specified repository.
        Results will be in the order the source control manager returns them.

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1 | jq .
        {
          "pagelen": 1,
          "size": 187,
          "values": [
            {
              "name": "issue-9.3/AUI-5343-assistive-class",
              "links": {
                "commits": {
                  "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/issue-9.3/AUI-5343-assistive-class"
                },
                "self": {
                  "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/issue-9.3/AUI-5343-assistive-class"
                },
                "html": {
                  "href": "https://bitbucket.org/atlassian/aui/branch/issue-9.3/AUI-5343-assistive-class"
                }
              },
              "default_merge_strategy": "squash",
              "merge_strategies": [
                "merge_commit",
                "squash",
                "fast_forward"
              ],
              "type": "branch",
              "target": {
                "hash": "e5d1cde9069fcb9f0af90403a4de2150c125a148",
                "repository": {
                  "links": {
                    "self": {
                      "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
                    },
                    "html": {
                      "href": "https://bitbucket.org/atlassian/aui"
                    },
                    "avatar": {
                      "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
                    }
                  },
                  "type": "repository",
                  "name": "aui",
                  "full_name": "atlassian/aui",
                  "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
                },
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148"
                  },
                  "comments": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/comments"
                  },
                  "patch": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e5d1cde9069fcb9f0af90403a4de2150c125a148"
                  },
                  "html": {
                    "href": "https://bitbucket.org/atlassian/aui/commits/e5d1cde9069fcb9f0af90403a4de2150c125a148"
                  },
                  "diff": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e5d1cde9069fcb9f0af90403a4de2150c125a148"
                  },
                  "approve": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/approve"
                  },
                  "statuses": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/statuses"
                  }
                },
                "author": {
                  "raw": "Marcin Konopka <mkonopka@atlassian.com>",
                  "type": "author",
                  "user": {
                    "display_name": "Marcin Konopka",
                    "uuid": "{47cc24f4-2a05-4420-88fe-0417535a110a}",
                    "links": {
                      "self": {
                        "href": "https://api.bitbucket.org/2.0/users/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D"
                      },
                      "html": {
                        "href": "https://bitbucket.org/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D/"
                      },
                      "avatar": {
                        "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/MK-1.png"
                      }
                    },
                    "nickname": "Marcin Konopka",
                    "type": "user",
                    "account_id": "60113d2b47a9540069f4de03"
                  }
                },
                "parents": [
                  {
                    "hash": "87f7fc92b00464ae47b13ef65c91884e4ac9be51",
                    "type": "commit",
                    "links": {
                      "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
                      },
                      "html": {
                        "href": "https://bitbucket.org/atlassian/aui/commits/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
                      }
                    }
                  }
                ],
                "date": "2021-04-13T13:44:49+00:00",
                "message": "wip
",
                "type": "commit"
              }
            }
          ],
          "page": 1,
          "next": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1&page=2"
        }
        ```

        Branches support [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering)
        that can be used to search for specific branches. For instance, to find
        all branches that have "stab" in their name:

        ```
        curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~ "stab"'
        ```

        By default, results will be in the order the underlying source control system returns them and identical to
        the ordering one sees when running "$ git branch --list". Note that this follows simple
        lexical ordering of the ref names.

        This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
        sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

        Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
        Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest();
    $request->q = 'dolores';
    $request->repoSlug = 'blanditiis';
    $request->sort = 'in';
    $request->workspace = 'dolore';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->refs->getRepositoriesWorkspaceRepoSlugRefsBranches($request, $requestSecurity);

    if ($response->paginatedBranches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugRefsBranchesName

Returns a branch object within the specified repository.

        ```
        $ curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master | jq .
        {
          "name": "master",
          "links": {
            "commits": {
              "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/master"
            },
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master"
            },
            "html": {
              "href": "https://bitbucket.org/atlassian/aui/branch/master"
            }
          },
          "default_merge_strategy": "squash",
          "merge_strategies": [
            "merge_commit",
            "squash",
            "fast_forward"
          ],
          "type": "branch",
          "target": {
            "hash": "e7d158ff7ed5538c28f94cd97a9ad569680fc94e",
            "repository": {
              "links": {
                "self": {
                  "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
                },
                "html": {
                  "href": "https://bitbucket.org/atlassian/aui"
                },
                "avatar": {
                  "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
                }
              },
              "type": "repository",
              "name": "aui",
              "full_name": "atlassian/aui",
              "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
            },
            "links": {
              "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
              },
              "comments": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/comments"
              },
              "patch": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
              },
              "html": {
                "href": "https://bitbucket.org/atlassian/aui/commits/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
              },
              "diff": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
              },
              "approve": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/approve"
              },
              "statuses": {
                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/statuses"
              }
            },
            "author": {
              "raw": "psre-renovate-bot <psre-renovate-bot@atlassian.com>",
              "type": "author",
              "user": {
                "display_name": "psre-renovate-bot",
                "uuid": "{250a442a-3ab3-4fcb-87c3-3c8f3df65ec7}",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/users/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D"
                  },
                  "html": {
                    "href": "https://bitbucket.org/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D/"
                  },
                  "avatar": {
                    "href": "https://secure.gravatar.com/avatar/6972ee037c9f36360170a86f544071a2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FP-3.png"
                  }
                },
                "nickname": "Renovate Bot",
                "type": "user",
                "account_id": "5d5355e8c6b9320d9ea5b28d"
              }
            },
            "parents": [
              {
                "hash": "eab868a309e75733de80969a7bed1ec6d4651e06",
                "type": "commit",
                "links": {
                  "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/eab868a309e75733de80969a7bed1ec6d4651e06"
                  },
                  "html": {
                    "href": "https://bitbucket.org/atlassian/aui/commits/eab868a309e75733de80969a7bed1ec6d4651e06"
                  }
                }
              }
            ],
            "date": "2021-04-12T06:44:38+00:00",
            "message": "Merged in issue/NONE-renovate-master-babel-monorepo (pull request #2883)

chore(deps): update babel monorepo to v7.13.15 (master)

Approved-by: Chris "Daz" Darroch
",
            "type": "commit"
          }
        }
        ```

        This call requires authentication. Private repositories require the
        caller to authenticate with an account that has appropriate
        authorization.

        For Git, the branch name should not include any prefixes (e.g.
        refs/heads).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest();
    $request->name = 'Rochelle Smitham';
    $request->repoSlug = 'cum';
    $request->workspace = 'blanditiis';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->refs->getRepositoriesWorkspaceRepoSlugRefsBranchesName($request, $requestSecurity);

    if ($response->branch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugRefsTags

Returns the tags in the repository.

By default, results will be in the order the underlying source control system returns them and identical to
the ordering one sees when running "$ git tag --list". Note that this follows simple
lexical ordering of the ref names.

This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugRefsTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugRefsTagsRequest();
    $request->q = 'quas';
    $request->repoSlug = 'hic';
    $request->sort = 'nesciunt';
    $request->workspace = 'culpa';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->refs->getRepositoriesWorkspaceRepoSlugRefsTags($request, $requestSecurity);

    if ($response->paginatedTags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugRefsTagsName

Returns the specified tag.

```
$ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
{
  "name": "3.8",
  "links": {
    "commits": {
      "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
    },
    "self": {
      "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
    },
    "html": {
      "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
    }
  },
  "tagger": {
    "raw": "Matt Mackall <mpm@selenic.com>",
    "type": "author",
    "user": {
      "username": "mpmselenic",
      "nickname": "mpmselenic",
      "display_name": "Matt Mackall",
      "type": "user",
      "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/users/mpmselenic"
        },
        "html": {
          "href": "https://bitbucket.org/mpmselenic/"
        },
        "avatar": {
          "href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
        }
      }
    }
  },
  "date": "2016-05-01T18:52:25+00:00",
  "message": "Added tag 3.8 for changeset f85de28eae32",
  "type": "tag",
  "target": {
    "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069",
    "repository": {
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
        },
        "html": {
          "href": "https://bitbucket.org/seanfarley/hg"
        },
        "avatar": {
          "href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
        }
      },
      "type": "repository",
      "name": "hg",
      "full_name": "seanfarley/hg",
      "uuid": "{c75687fb-e99d-4579-9087-190dbd406d30}"
    },
    "links": {
      "self": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
      },
      "comments": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
      },
      "patch": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
      },
      "html": {
        "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
      },
      "diff": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
      },
      "approve": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
      },
      "statuses": {
        "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
      }
    },
    "author": {
      "raw": "Sean Farley <sean@farley.io>",
      "type": "author",
      "user": {
        "username": "seanfarley",
        "nickname": "seanfarley",
        "display_name": "Sean Farley",
        "type": "user",
        "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/seanfarley"
          },
          "html": {
            "href": "https://bitbucket.org/seanfarley/"
          },
          "avatar": {
            "href": "https://bitbucket.org/account/seanfarley/avatar/32/"
          }
        }
      }
    },
    "parents": [
      {
        "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2",
        "type": "commit",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
          },
          "html": {
            "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
          }
        }
      }
    ],
    "date": "2016-05-01T04:21:17+00:00",
    "message": "debian: alphabetize build deps",
    "type": "commit"
  }
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugRefsTagsNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugRefsTagsNameRequest();
    $request->name = 'Dewey Leannon';
    $request->repoSlug = 'nobis';
    $request->workspace = 'sit';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->refs->getRepositoriesWorkspaceRepoSlugRefsTagsName($request, $requestSecurity);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugRefsBranches

Creates a new branch in the specified repository.

The payload of the POST should consist of a JSON document that
contains the name of the tag and the target hash.

```
curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \
-s -u seanfarley -X POST -H "Content-Type: application/json" \
-d '{
    "name" : "smf/create-feature",
    "target" : {
        "hash" : "default",
    }
}'
```

This call requires authentication. Private repositories require the
caller to authenticate with an account that has appropriate
authorization.

The branch name should not include any prefixes (e.g.
refs/heads). This endpoint does support using short hash prefixes for
the commit hash, but it may return a 400 response if the provided
prefix is ambiguous. Using a full commit hash is the preferred
approach.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugRefsBranchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugRefsBranchesRequest();
    $request->repoSlug = 'rerum';
    $request->workspace = 'sed';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->refs->postRepositoriesWorkspaceRepoSlugRefsBranches($request, $requestSecurity);

    if ($response->branch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugRefsTags

Creates a new tag in the specified repository.

The payload of the POST should consist of a JSON document that
contains the name of the tag and the target hash.

```
curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \
-s -u jdoe -X POST -H "Content-Type: application/json" \
-d '{
    "name" : "new-tag-name",
    "target" : {
        "hash" : "a1b2c3d4e5f6",
    }
}'
```

This endpoint does support using short hash prefixes for the commit
hash, but it may return a 400 response if the provided prefix is
ambiguous. Using a full commit hash is the preferred approach.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugRefsTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugRefsTagsRequest();
    $request->requestBody = [
        'explicabo' => 'asperiores',
        'facilis' => 'voluptate',
        'expedita' => 'ab',
        'iste' => 'dolore',
    ];
    $request->repoSlug = 'laborum';
    $request->workspace = 'sed';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->refs->postRepositoriesWorkspaceRepoSlugRefsTags($request, $requestSecurity);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
