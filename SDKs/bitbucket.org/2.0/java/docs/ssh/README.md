# ssh

## Overview

The SSH resource allows you to manage SSH keys.


### Available Operations

* [deleteUsersSelectedUserSshKeysKeyId](#deleteusersselectedusersshkeyskeyid) - Delete a SSH key
* [getUsersSelectedUserSshKeys](#getusersselectedusersshkeys) - List SSH keys
* [getUsersSelectedUserSshKeysKeyId](#getusersselectedusersshkeyskeyid) - Get a SSH key
* [postUsersSelectedUserSshKeys](#postusersselectedusersshkeys) - Add a new SSH key
* [putUsersSelectedUserSshKeysKeyId](#putusersselectedusersshkeyskeyid) - Update a SSH key

## deleteUsersSelectedUserSshKeysKeyId

Deletes a specific SSH public key from a user's account

Example:
```
$ curl -X DELETE https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersSelectedUserSshKeysKeyIdRequest;
import org.openapis.openapi.models.operations.DeleteUsersSelectedUserSshKeysKeyIdResponse;
import org.openapis.openapi.models.operations.DeleteUsersSelectedUserSshKeysKeyIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersSelectedUserSshKeysKeyIdRequest req = new DeleteUsersSelectedUserSshKeysKeyIdRequest("dolores", "enim");            

            DeleteUsersSelectedUserSshKeysKeyIdResponse res = sdk.ssh.deleteUsersSelectedUserSshKeysKeyId(req, new DeleteUsersSelectedUserSshKeysKeyIdSecurity() {{
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

## getUsersSelectedUserSshKeys

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersSelectedUserSshKeysRequest;
import org.openapis.openapi.models.operations.GetUsersSelectedUserSshKeysResponse;
import org.openapis.openapi.models.operations.GetUsersSelectedUserSshKeysSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersSelectedUserSshKeysRequest req = new GetUsersSelectedUserSshKeysRequest("laboriosam");            

            GetUsersSelectedUserSshKeysResponse res = sdk.ssh.getUsersSelectedUserSshKeys(req, new GetUsersSelectedUserSshKeysSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedSshUserKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersSelectedUserSshKeysKeyId

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersSelectedUserSshKeysKeyIdRequest;
import org.openapis.openapi.models.operations.GetUsersSelectedUserSshKeysKeyIdResponse;
import org.openapis.openapi.models.operations.GetUsersSelectedUserSshKeysKeyIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersSelectedUserSshKeysKeyIdRequest req = new GetUsersSelectedUserSshKeysKeyIdRequest("velit", "a");            

            GetUsersSelectedUserSshKeysKeyIdResponse res = sdk.ssh.getUsersSelectedUserSshKeysKeyId(req, new GetUsersSelectedUserSshKeysKeyIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.sshAccountKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersSelectedUserSshKeys

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersSelectedUserSshKeysRequest;
import org.openapis.openapi.models.operations.PostUsersSelectedUserSshKeysResponse;
import org.openapis.openapi.models.operations.PostUsersSelectedUserSshKeysSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersSelectedUserSshKeysRequest req = new PostUsersSelectedUserSshKeysRequest("molestias") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("saepe", "consequuntur");
                    put("occaecati", "officiis");
                }};
            }};            

            PostUsersSelectedUserSshKeysResponse res = sdk.ssh.postUsersSelectedUserSshKeys(req, new PostUsersSelectedUserSshKeysSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.sshAccountKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersSelectedUserSshKeysKeyId

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersSelectedUserSshKeysKeyIdRequest;
import org.openapis.openapi.models.operations.PutUsersSelectedUserSshKeysKeyIdResponse;
import org.openapis.openapi.models.operations.PutUsersSelectedUserSshKeysKeyIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUsersSelectedUserSshKeysKeyIdRequest req = new PutUsersSelectedUserSshKeysKeyIdRequest("perspiciatis", "in") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eveniet", "occaecati");
                }};
            }};            

            PutUsersSelectedUserSshKeysKeyIdResponse res = sdk.ssh.putUsersSelectedUserSshKeysKeyId(req, new PutUsersSelectedUserSshKeysKeyIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.sshAccountKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
