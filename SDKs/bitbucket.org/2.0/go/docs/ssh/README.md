# SSH

## Overview

The SSH resource allows you to manage SSH keys.


### Available Operations

* [DeleteUsersSelectedUserSSHKeysKeyID](#deleteusersselectedusersshkeyskeyid) - Delete a SSH key
* [GetUsersSelectedUserSSHKeys](#getusersselectedusersshkeys) - List SSH keys
* [GetUsersSelectedUserSSHKeysKeyID](#getusersselectedusersshkeyskeyid) - Get a SSH key
* [PostUsersSelectedUserSSHKeys](#postusersselectedusersshkeys) - Add a new SSH key
* [PutUsersSelectedUserSSHKeysKeyID](#putusersselectedusersshkeyskeyid) - Update a SSH key

## DeleteUsersSelectedUserSSHKeysKeyID

Deletes a specific SSH public key from a user's account

Example:
```
$ curl -X DELETE https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
```

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
    res, err := s.SSH.DeleteUsersSelectedUserSSHKeysKeyID(ctx, operations.DeleteUsersSelectedUserSSHKeysKeyIDRequest{
        KeyID: "eum",
        SelectedUser: "eius",
    }, operations.DeleteUsersSelectedUserSSHKeysKeyIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUsersSelectedUserSSHKeys

Returns a paginated list of the user's SSH public keys.

Example:

```
$ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
{
    "page": 1,
    "pagelen": 10,
    "size": 1,
    "values": [
        {
            "comment": "user@myhost",
            "created_on": "2018-03-14T13:17:05.196003+00:00",
            "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
            "label": "",
            "last_used": "2018-03-20T13:18:05.196003+00:00",
            "links": {
                "self": {
                    "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
                }
            },
            "owner": {
                "display_name": "Mark Adams",
                "links": {
                    "avatar": {
                        "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
                    },
                    "html": {
                        "href": "https://bitbucket.org/markadams-atl/"
                    },
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
                    }
                },
                "type": "user",
                "username": "markadams-atl",
                "nickname": "markadams-atl",
                "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
            },
            "type": "ssh_key",
            "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
        }
    ]
}
```

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
    res, err := s.SSH.GetUsersSelectedUserSSHKeys(ctx, operations.GetUsersSelectedUserSSHKeysRequest{
        SelectedUser: "rem",
    }, operations.GetUsersSelectedUserSSHKeysSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedSSHUserKeys != nil {
        // handle response
    }
}
```

## GetUsersSelectedUserSSHKeysKeyID

Returns a specific SSH public key belonging to a user.

Example:
```
$ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{fbe4bbab-f6f7-4dde-956b-5c58323c54b3}

{
    "comment": "user@myhost",
    "created_on": "2018-03-14T13:17:05.196003+00:00",
    "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
    "label": "",
    "last_used": "2018-03-20T13:18:05.196003+00:00",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
        }
    },
    "owner": {
        "display_name": "Mark Adams",
        "links": {
            "avatar": {
                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
            },
            "html": {
                "href": "https://bitbucket.org/markadams-atl/"
            },
            "self": {
                "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
            }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
    },
    "type": "ssh_key",
    "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
}
```

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
    res, err := s.SSH.GetUsersSelectedUserSSHKeysKeyID(ctx, operations.GetUsersSelectedUserSSHKeysKeyIDRequest{
        KeyID: "at",
        SelectedUser: "impedit",
    }, operations.GetUsersSelectedUserSSHKeysKeyIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHAccountKey != nil {
        // handle response
    }
}
```

## PostUsersSelectedUserSSHKeys

Adds a new SSH public key to the specified user account and returns the resulting key.

Example:
```
$ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys

{
    "comment": "user@myhost",
    "created_on": "2018-03-14T13:17:05.196003+00:00",
    "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
    "label": "",
    "last_used": "2018-03-20T13:18:05.196003+00:00",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
        }
    },
    "owner": {
        "display_name": "Mark Adams",
        "links": {
            "avatar": {
                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
            },
            "html": {
                "href": "https://bitbucket.org/markadams-atl/"
            },
            "self": {
                "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
            }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
    },
    "type": "ssh_key",
    "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
}
```

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
    res, err := s.SSH.PostUsersSelectedUserSSHKeys(ctx, operations.PostUsersSelectedUserSSHKeysRequest{
        RequestBody: map[string]interface{}{
            "sapiente": "eum",
        },
        SelectedUser: "dicta",
    }, operations.PostUsersSelectedUserSSHKeysSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHAccountKey != nil {
        // handle response
    }
}
```

## PutUsersSelectedUserSSHKeysKeyID

Updates a specific SSH public key on a user's account

Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.

Example:
```
$ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}

{
    "comment": "",
    "created_on": "2018-03-14T13:17:05.196003+00:00",
    "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
    "label": "Work key",
    "last_used": "2018-03-20T13:18:05.196003+00:00",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
        }
    },
    "owner": {
        "display_name": "Mark Adams",
        "links": {
            "avatar": {
                "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
            },
            "html": {
                "href": "https://bitbucket.org/markadams-atl/"
            },
            "self": {
                "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
            }
        },
        "type": "user",
        "username": "markadams-atl",
        "nickname": "markadams-atl",
        "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
    },
    "type": "ssh_key",
    "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
}
```

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
    res, err := s.SSH.PutUsersSelectedUserSSHKeysKeyID(ctx, operations.PutUsersSelectedUserSSHKeysKeyIDRequest{
        RequestBody: map[string]interface{}{
            "beatae": "cupiditate",
            "provident": "earum",
        },
        KeyID: "soluta",
        SelectedUser: "hic",
    }, operations.PutUsersSelectedUserSSHKeysKeyIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHAccountKey != nil {
        // handle response
    }
}
```
