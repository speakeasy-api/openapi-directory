# Codespaces

## Overview

Endpoints to manage Codespaces using the REST API.

### Available Operations

* [CodespacesAddRepositoryForSecretForAuthenticatedUser](#codespacesaddrepositoryforsecretforauthenticateduser) - Add a selected repository to a user secret
* [CodespacesAddSelectedRepoToOrgSecret](#codespacesaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [CodespacesCodespaceMachinesForAuthenticatedUser](#codespacescodespacemachinesforauthenticateduser) - List machine types for a codespace
* [CodespacesCreateForAuthenticatedUser](#codespacescreateforauthenticateduser) - Create a codespace for the authenticated user
* [CodespacesCreateOrUpdateOrgSecret](#codespacescreateorupdateorgsecret) - Create or update an organization secret
* [CodespacesCreateOrUpdateRepoSecret](#codespacescreateorupdatereposecret) - Create or update a repository secret
* [CodespacesCreateOrUpdateSecretForAuthenticatedUser](#codespacescreateorupdatesecretforauthenticateduser) - Create or update a secret for the authenticated user
* [CodespacesCreateWithPrForAuthenticatedUser](#codespacescreatewithprforauthenticateduser) - Create a codespace from a pull request
* [CodespacesCreateWithRepoForAuthenticatedUser](#codespacescreatewithrepoforauthenticateduser) - Create a codespace in a repository
* [CodespacesDeleteCodespacesBillingUsers](#codespacesdeletecodespacesbillingusers) - Removes users from Codespaces billing for an organization
* [CodespacesDeleteForAuthenticatedUser](#codespacesdeleteforauthenticateduser) - Delete a codespace for the authenticated user
* [CodespacesDeleteFromOrganization](#codespacesdeletefromorganization) - Delete a codespace from the organization
* [CodespacesDeleteOrgSecret](#codespacesdeleteorgsecret) - Delete an organization secret
* [CodespacesDeleteRepoSecret](#codespacesdeletereposecret) - Delete a repository secret
* [CodespacesDeleteSecretForAuthenticatedUser](#codespacesdeletesecretforauthenticateduser) - Delete a secret for the authenticated user
* [CodespacesExportForAuthenticatedUser](#codespacesexportforauthenticateduser) - Export a codespace for the authenticated user
* [CodespacesGetCodespacesForUserInOrg](#codespacesgetcodespacesforuserinorg) - List codespaces for a user in organization
* [CodespacesGetExportDetailsForAuthenticatedUser](#codespacesgetexportdetailsforauthenticateduser) - Get details about a codespace export
* [CodespacesGetForAuthenticatedUser](#codespacesgetforauthenticateduser) - Get a codespace for the authenticated user
* [CodespacesGetOrgPublicKey](#codespacesgetorgpublickey) - Get an organization public key
* [CodespacesGetOrgSecret](#codespacesgetorgsecret) - Get an organization secret
* [CodespacesGetPublicKeyForAuthenticatedUser](#codespacesgetpublickeyforauthenticateduser) - Get public key for the authenticated user
* [CodespacesGetRepoPublicKey](#codespacesgetrepopublickey) - Get a repository public key
* [CodespacesGetRepoSecret](#codespacesgetreposecret) - Get a repository secret
* [CodespacesGetSecretForAuthenticatedUser](#codespacesgetsecretforauthenticateduser) - Get a secret for the authenticated user
* [CodespacesListDevcontainersInRepositoryForAuthenticatedUser](#codespaceslistdevcontainersinrepositoryforauthenticateduser) - List devcontainer configurations in a repository for the authenticated user
* [CodespacesListForAuthenticatedUser](#codespaceslistforauthenticateduser) - List codespaces for the authenticated user
* [CodespacesListInOrganization](#codespaceslistinorganization) - List codespaces for the organization
* [CodespacesListInRepositoryForAuthenticatedUser](#codespaceslistinrepositoryforauthenticateduser) - List codespaces in a repository for the authenticated user
* [CodespacesListOrgSecrets](#codespaceslistorgsecrets) - List organization secrets
* [CodespacesListRepoSecrets](#codespaceslistreposecrets) - List repository secrets
* [CodespacesListRepositoriesForSecretForAuthenticatedUser](#codespaceslistrepositoriesforsecretforauthenticateduser) - List selected repositories for a user secret
* [CodespacesListSecretsForAuthenticatedUser](#codespaceslistsecretsforauthenticateduser) - List secrets for the authenticated user
* [CodespacesListSelectedReposForOrgSecret](#codespaceslistselectedreposfororgsecret) - List selected repositories for an organization secret
* [CodespacesPreFlightWithRepoForAuthenticatedUser](#codespacespreflightwithrepoforauthenticateduser) - Get default attributes for a codespace
* [CodespacesPublishForAuthenticatedUser](#codespacespublishforauthenticateduser) - Create a repository from an unpublished codespace
* [CodespacesRemoveRepositoryForSecretForAuthenticatedUser](#codespacesremoverepositoryforsecretforauthenticateduser) - Remove a selected repository from a user secret
* [CodespacesRemoveSelectedRepoFromOrgSecret](#codespacesremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [CodespacesRepoMachinesForAuthenticatedUser](#codespacesrepomachinesforauthenticateduser) - List available machine types for a repository
* [CodespacesSetCodespacesBilling](#codespacessetcodespacesbilling) - Manage access control for organization codespaces
* [CodespacesSetCodespacesBillingUsers](#codespacessetcodespacesbillingusers) - Add users to Codespaces billing for an organization
* [CodespacesSetRepositoriesForSecretForAuthenticatedUser](#codespacessetrepositoriesforsecretforauthenticateduser) - Set selected repositories for a user secret
* [CodespacesSetSelectedReposForOrgSecret](#codespacessetselectedreposfororgsecret) - Set selected repositories for an organization secret
* [CodespacesStartForAuthenticatedUser](#codespacesstartforauthenticateduser) - Start a codespace for the authenticated user
* [CodespacesStopForAuthenticatedUser](#codespacesstopforauthenticateduser) - Stop a codespace for the authenticated user
* [CodespacesStopInOrganization](#codespacesstopinorganization) - Stop a codespace for an organization user
* [CodespacesUpdateForAuthenticatedUser](#codespacesupdateforauthenticateduser) - Update a codespace for the authenticated user

## CodespacesAddRepositoryForSecretForAuthenticatedUser

Adds a repository to the selected repositories for a user's codespace secret.
You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on the referenced repository to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#add-a-selected-repository-to-a-user-secret>

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
    res, err := s.Codespaces.CodespacesAddRepositoryForSecretForAuthenticatedUser(ctx, operations.CodespacesAddRepositoryForSecretForAuthenticatedUserRequest{
        RepositoryID: 153627,
        SecretName: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesAddSelectedRepoToOrgSecret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#add-selected-repository-to-an-organization-secret>

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
    res, err := s.Codespaces.CodespacesAddSelectedRepoToOrgSecret(ctx, operations.CodespacesAddSelectedRepoToOrgSecretRequest{
        Org: "vel",
        RepositoryID: 342611,
        SecretName: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesCodespaceMachinesForAuthenticatedUser

List the machine types a codespace can transition to use.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-machine-types-for-a-codespace>

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
    res, err := s.Codespaces.CodespacesCodespaceMachinesForAuthenticatedUser(ctx, operations.CodespacesCodespaceMachinesForAuthenticatedUserRequest{
        CodespaceName: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesCodespaceMachinesForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesCreateForAuthenticatedUser

Creates a new codespace, owned by the authenticated user.

This endpoint requires either a `repository_id` OR a `pull_request` but not both.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#create-a-codespace-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesCreateForAuthenticatedUser(ctx, operations.CodespacesCreateForAuthenticatedUserRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.Codespace != nil {
        // handle response
    }
}
```

## CodespacesCreateOrUpdateOrgSecret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `admin:org` scope to use this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#create-or-update-an-organization-secret>

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
    res, err := s.Codespaces.CodespacesCreateOrUpdateOrgSecret(ctx, operations.CodespacesCreateOrUpdateOrgSecretRequest{
        RequestBody: operations.CodespacesCreateOrUpdateOrgSecretRequestBody{
            EncryptedValue: sdk.String("consequatur"),
            KeyID: sdk.String("incidunt"),
            SelectedRepositoryIds: []int64{
                209750,
                690894,
                115703,
                99416,
            },
            Visibility: operations.CodespacesCreateOrUpdateOrgSecretRequestBodyVisibilityEnumPrivate,
        },
        Org: "labore",
        SecretName: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## CodespacesCreateOrUpdateRepoSecret

Creates or updates a repository secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets`
repository permission to use this endpoint.

#### Example of encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example of encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example of encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example of encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#create-or-update-a-repository-secret>

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
    res, err := s.Codespaces.CodespacesCreateOrUpdateRepoSecret(ctx, operations.CodespacesCreateOrUpdateRepoSecretRequest{
        RequestBody: operations.CodespacesCreateOrUpdateRepoSecretRequestBody{
            EncryptedValue: sdk.String("atque"),
            KeyID: sdk.String("laborum"),
        },
        Owner: "nam",
        Repo: "tenetur",
        SecretName: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## CodespacesCreateOrUpdateSecretForAuthenticatedUser

Creates or updates a secret for a user's codespace with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages).

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must also have Codespaces access to use this endpoint.

GitHub Apps must have write access to the `codespaces_user_secrets` user permission and `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.

```
const sodium = require('libsodium-wrappers')
const secret = 'plain-text-secret' // replace with the secret you want to encrypt
const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key

//Check if libsodium is ready and then proceed.
sodium.ready.then(() => {
  // Convert Secret & Base64 key to Uint8Array.
  let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
  let binsec = sodium.from_string(secret)

  //Encrypt the secret using LibSodium
  let encBytes = sodium.crypto_box_seal(binsec, binkey)

  // Convert encrypted Uint8Array to Base64
  let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)

  console.log(output)
});
```

#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#create-or-update-a-secret-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesCreateOrUpdateSecretForAuthenticatedUser(ctx, operations.CodespacesCreateOrUpdateSecretForAuthenticatedUserRequest{
        RequestBody: operations.CodespacesCreateOrUpdateSecretForAuthenticatedUserRequestBody{
            EncryptedValue: sdk.String("alias"),
            KeyID: "amet",
            SelectedRepositoryIds: []interface{}{
                600392,
                "provident",
                "delectus",
            },
        },
        SecretName: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## CodespacesCreateWithPrForAuthenticatedUser

Creates a codespace owned by the authenticated user for the specified pull request.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#create-a-codespace-from-a-pull-request>

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
    res, err := s.Codespaces.CodespacesCreateWithPrForAuthenticatedUser(ctx, operations.CodespacesCreateWithPrForAuthenticatedUserRequest{
        RequestBody: operations.CodespacesCreateWithPrForAuthenticatedUserRequestBody{
            ClientIP: sdk.String("perferendis"),
            DevcontainerPath: sdk.String("est"),
            DisplayName: sdk.String("quidem"),
            IdleTimeoutMinutes: sdk.Int64(440666),
            Location: sdk.String("facere"),
            Machine: sdk.String("fuga"),
            MultiRepoPermissionsOptOut: sdk.Bool(false),
            RetentionPeriodMinutes: sdk.Int64(509807),
            WorkingDirectory: sdk.String("mollitia"),
        },
        Owner: "veniam",
        PullNumber: 29100,
        Repo: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Codespace != nil {
        // handle response
    }
}
```

## CodespacesCreateWithRepoForAuthenticatedUser

Creates a codespace owned by the authenticated user in the specified repository.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#create-a-codespace-in-a-repository>

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
    res, err := s.Codespaces.CodespacesCreateWithRepoForAuthenticatedUser(ctx, operations.CodespacesCreateWithRepoForAuthenticatedUserRequest{
        RequestBody: operations.CodespacesCreateWithRepoForAuthenticatedUserRequestBody{
            ClientIP: sdk.String("repudiandae"),
            DevcontainerPath: sdk.String("quasi"),
            DisplayName: sdk.String("atque"),
            IdleTimeoutMinutes: sdk.Int64(442036),
            Location: sdk.String("asperiores"),
            Machine: sdk.String("totam"),
            MultiRepoPermissionsOptOut: sdk.Bool(false),
            Ref: sdk.String("suscipit"),
            RetentionPeriodMinutes: sdk.Int64(693957),
            WorkingDirectory: sdk.String("maxime"),
        },
        Owner: "et",
        Repo: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Codespace != nil {
        // handle response
    }
}
```

## CodespacesDeleteCodespacesBillingUsers

Codespaces for the specified users will no longer be billed to the organization.
To use this endpoint, the billing settings for the organization must be set to `selected_members`. For information on how to change this setting please see [these docs].(https://docs.github.com/enterprise-cloud@latest//rest/codespaces/organizations#manage-access-control-for-organization-codespaces) You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#delete-codespaces-billing-users>

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
    res, err := s.Codespaces.CodespacesDeleteCodespacesBillingUsers(ctx, operations.CodespacesDeleteCodespacesBillingUsersRequest{
        RequestBody: operations.CodespacesDeleteCodespacesBillingUsersRequestBody{
            SelectedUsernames: []string{
                "assumenda",
            },
        },
        Org: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesDeleteForAuthenticatedUser

Deletes a user's codespace.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesDeleteForAuthenticatedUser(ctx, operations.CodespacesDeleteForAuthenticatedUserRequest{
        CodespaceName: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesDeleteForAuthenticatedUser202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesDeleteFromOrganization

Deletes a user's codespace.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces>

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
    res, err := s.Codespaces.CodespacesDeleteFromOrganization(ctx, operations.CodespacesDeleteFromOrganizationRequest{
        CodespaceName: "error",
        Org: "officiis",
        Username: "Sherman.Thompson",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesDeleteFromOrganization202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesDeleteOrgSecret

Deletes an organization secret using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#delete-an-organization-secret>

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
    res, err := s.Codespaces.CodespacesDeleteOrgSecret(ctx, operations.CodespacesDeleteOrgSecretRequest{
        Org: "aspernatur",
        SecretName: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesDeleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#delete-a-repository-secret>

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
    res, err := s.Codespaces.CodespacesDeleteRepoSecret(ctx, operations.CodespacesDeleteRepoSecretRequest{
        Owner: "maiores",
        Repo: "corrupti",
        SecretName: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesDeleteSecretForAuthenticatedUser

Deletes a secret from a user's codespaces using the secret name. Deleting the secret will remove access from all codespaces that were allowed to access the secret.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#delete-a-secret-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesDeleteSecretForAuthenticatedUser(ctx, operations.CodespacesDeleteSecretForAuthenticatedUserRequest{
        SecretName: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesExportForAuthenticatedUser

Triggers an export of the specified codespace and returns a URL and ID where the status of the export can be monitored.

If changes cannot be pushed to the codespace's repository, they will be pushed to a new or previously-existing fork instead.

You must authenticate using a personal access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesExportForAuthenticatedUser(ctx, operations.CodespacesExportForAuthenticatedUserRequest{
        CodespaceName: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespaceExportDetails != nil {
        // handle response
    }
}
```

## CodespacesGetCodespacesForUserInOrg

Lists the codespaces that a member of an organization has for repositories in that organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-codespaces-for-user-in-org>

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
    res, err := s.Codespaces.CodespacesGetCodespacesForUserInOrg(ctx, operations.CodespacesGetCodespacesForUserInOrgRequest{
        Org: "suscipit",
        Page: sdk.Int64(922348),
        PerPage: sdk.Int64(542129),
        Username: "Kara_Cartwright82",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesGetCodespacesForUserInOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesGetExportDetailsForAuthenticatedUser

Gets information about an export of a codespace.

You must authenticate using a personal access token with the `codespace` scope to use this endpoint.

GitHub Apps must have read access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/codespaces/codespaces#get-details-about-a-codespace-export>

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
    res, err := s.Codespaces.CodespacesGetExportDetailsForAuthenticatedUser(ctx, operations.CodespacesGetExportDetailsForAuthenticatedUserRequest{
        CodespaceName: "labore",
        ExportID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespaceExportDetails != nil {
        // handle response
    }
}
```

## CodespacesGetForAuthenticatedUser

Gets information about a user's codespace.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-a-codespace-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesGetForAuthenticatedUser(ctx, operations.CodespacesGetForAuthenticatedUserRequest{
        CodespaceName: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Codespace != nil {
        // handle response
    }
}
```

## CodespacesGetOrgPublicKey

Gets a public key for an organization, which is required in order to encrypt secrets. You need to encrypt the value of a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-an-organization-public-key>

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
    res, err := s.Codespaces.CodespacesGetOrgPublicKey(ctx, operations.CodespacesGetOrgPublicKeyRequest{
        Org: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesPublicKey != nil {
        // handle response
    }
}
```

## CodespacesGetOrgSecret

Gets an organization secret without revealing its encrypted value.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-an-organization-secret>

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
    res, err := s.Codespaces.CodespacesGetOrgSecret(ctx, operations.CodespacesGetOrgSecretRequest{
        Org: "dicta",
        SecretName: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesOrgSecret != nil {
        // handle response
    }
}
```

## CodespacesGetPublicKeyForAuthenticatedUser

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-public-key-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Codespaces.CodespacesGetPublicKeyForAuthenticatedUser(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesUserPublicKey != nil {
        // handle response
    }
}
```

## CodespacesGetRepoPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-a-repository-public-key>

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
    res, err := s.Codespaces.CodespacesGetRepoPublicKey(ctx, operations.CodespacesGetRepoPublicKeyRequest{
        Owner: "beatae",
        Repo: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesPublicKey != nil {
        // handle response
    }
}
```

## CodespacesGetRepoSecret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-a-repository-secret>

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
    res, err := s.Codespaces.CodespacesGetRepoSecret(ctx, operations.CodespacesGetRepoSecretRequest{
        Owner: "enim",
        Repo: "laboriosam",
        SecretName: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepoCodespacesSecret != nil {
        // handle response
    }
}
```

## CodespacesGetSecretForAuthenticatedUser

Gets a secret available to a user's codespaces without revealing its encrypted value.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-a-secret-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesGetSecretForAuthenticatedUser(ctx, operations.CodespacesGetSecretForAuthenticatedUserRequest{
        SecretName: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesSecret != nil {
        // handle response
    }
}
```

## CodespacesListDevcontainersInRepositoryForAuthenticatedUser

Lists the devcontainer.json files associated with a specified repository and the authenticated user. These files
specify launchpoint configurations for codespaces created within the repository.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesListDevcontainersInRepositoryForAuthenticatedUser(ctx, operations.CodespacesListDevcontainersInRepositoryForAuthenticatedUserRequest{
        Owner: "molestias",
        Page: sdk.Int64(300029),
        PerPage: sdk.Int64(906355),
        Repo: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesListForAuthenticatedUser

Lists the authenticated user's codespaces.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-codespaces-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesListForAuthenticatedUser(ctx, operations.CodespacesListForAuthenticatedUserRequest{
        Page: sdk.Int64(580107),
        PerPage: sdk.Int64(886305),
        RepositoryID: sdk.Int64(597937),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesListForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesListInOrganization

Lists the codespaces associated to a specified organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-in-organization>

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
    res, err := s.Codespaces.CodespacesListInOrganization(ctx, operations.CodespacesListInOrganizationRequest{
        Org: "in",
        Page: sdk.Int64(238043),
        PerPage: sdk.Int64(907876),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesListInOrganization200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesListInRepositoryForAuthenticatedUser

Lists the codespaces associated to a specified repository and the authenticated user.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesListInRepositoryForAuthenticatedUser(ctx, operations.CodespacesListInRepositoryForAuthenticatedUserRequest{
        Owner: "occaecati",
        Page: sdk.Int64(160230),
        PerPage: sdk.Int64(145870),
        Repo: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesListInRepositoryForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesListOrgSecrets

Lists all Codespaces secrets available at the organization-level without revealing their encrypted values.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-organization-secrets>

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
    res, err := s.Codespaces.CodespacesListOrgSecrets(ctx, operations.CodespacesListOrgSecretsRequest{
        Org: "quis",
        Page: sdk.Int64(440264),
        PerPage: sdk.Int64(625528),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesListOrgSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesListRepoSecrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-repository-secrets>

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
    res, err := s.Codespaces.CodespacesListRepoSecrets(ctx, operations.CodespacesListRepoSecretsRequest{
        Owner: "illo",
        Page: sdk.Int64(361306),
        PerPage: sdk.Int64(696463),
        Repo: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesListRepoSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesListRepositoriesForSecretForAuthenticatedUser

List the repositories that have been granted the ability to use a user's codespace secret.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have read access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-selected-repositories-for-a-user-secret>

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
    res, err := s.Codespaces.CodespacesListRepositoriesForSecretForAuthenticatedUser(ctx, operations.CodespacesListRepositoriesForSecretForAuthenticatedUserRequest{
        SecretName: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesListRepositoriesForSecretForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesListSecretsForAuthenticatedUser

Lists all secrets available for a user's Codespaces without revealing their
encrypted values.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-secrets-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesListSecretsForAuthenticatedUser(ctx, operations.CodespacesListSecretsForAuthenticatedUserRequest{
        Page: sdk.Int64(878493),
        PerPage: sdk.Int64(39615),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesListSecretsForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesListSelectedReposForOrgSecret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-selected-repositories-for-an-organization-secret>

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
    res, err := s.Codespaces.CodespacesListSelectedReposForOrgSecret(ctx, operations.CodespacesListSelectedReposForOrgSecretRequest{
        Org: "iure",
        Page: sdk.Int64(59944),
        PerPage: sdk.Int64(517612),
        SecretName: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesListSelectedReposForOrgSecret200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesPreFlightWithRepoForAuthenticatedUser

Gets the default attributes for codespaces created by the user with the repository.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#preview-attributes-for-a-new-codespace>

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
    res, err := s.Codespaces.CodespacesPreFlightWithRepoForAuthenticatedUser(ctx, operations.CodespacesPreFlightWithRepoForAuthenticatedUserRequest{
        ClientIP: sdk.String("1.2.3.4"),
        Owner: "molestiae",
        Ref: sdk.String("main"),
        Repo: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesPreFlightWithRepoForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesPublishForAuthenticatedUser

Publishes an unpublished codespace, creating a new repository and assigning it to the codespace.

The codespace's token is granted write permissions to the repository, allowing the user to push their changes.

This will fail for a codespace that is already published, meaning it has an associated repository.

You must authenticate using a personal access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces/codespaces#create-a-repository-from-an-unpublished-codespace>

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
    res, err := s.Codespaces.CodespacesPublishForAuthenticatedUser(ctx, operations.CodespacesPublishForAuthenticatedUserRequest{
        RequestBody: operations.CodespacesPublishForAuthenticatedUserRequestBody{
            Name: sdk.String("Karla Kerluke"),
            Private: sdk.Bool(false),
        },
        CodespaceName: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespaceWithFullRepository != nil {
        // handle response
    }
}
```

## CodespacesRemoveRepositoryForSecretForAuthenticatedUser

Removes a repository from the selected repositories for a user's codespace secret.
You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret>

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
    res, err := s.Codespaces.CodespacesRemoveRepositoryForSecretForAuthenticatedUser(ctx, operations.CodespacesRemoveRepositoryForSecretForAuthenticatedUserRequest{
        RepositoryID: 715208,
        SecretName: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#remove-selected-repository-from-an-organization-secret>

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
    res, err := s.Codespaces.CodespacesRemoveSelectedRepoFromOrgSecret(ctx, operations.CodespacesRemoveSelectedRepoFromOrgSecretRequest{
        Org: "rem",
        RepositoryID: 304446,
        SecretName: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesRepoMachinesForAuthenticatedUser

List the machine types available for a given repository based on its configuration.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces_metadata` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-available-machine-types-for-a-repository>

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
    res, err := s.Codespaces.CodespacesRepoMachinesForAuthenticatedUser(ctx, operations.CodespacesRepoMachinesForAuthenticatedUserRequest{
        ClientIP: sdk.String("repellat"),
        Location: sdk.String("WestUs2"),
        Owner: "alias",
        Repo: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodespacesRepoMachinesForAuthenticatedUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CodespacesSetCodespacesBilling

Sets which users can access codespaces in an organization. This is synonymous with granting or revoking codespaces billing permissions for users according to the visibility.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#set-codespaces-billing>

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
    res, err := s.Codespaces.CodespacesSetCodespacesBilling(ctx, operations.CodespacesSetCodespacesBillingRequest{
        RequestBody: operations.CodespacesSetCodespacesBillingRequestBody{
            SelectedUsernames: []string{
                "nihil",
                "mollitia",
                "voluptas",
            },
            Visibility: operations.CodespacesSetCodespacesBillingRequestBodyVisibilityEnumDisabled,
        },
        Org: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesSetCodespacesBillingUsers

Codespaces for the specified users will be billed to the organization.
To use this endpoint, the billing settings for the organization must be set to `selected_members`. For information on how to change this setting please see [these docs].(https://docs.github.com/enterprise-cloud@latest//rest/codespaces/organizations#manage-access-control-for-organization-codespaces) You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#set-codespaces-billing-users>

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
    res, err := s.Codespaces.CodespacesSetCodespacesBillingUsers(ctx, operations.CodespacesSetCodespacesBillingUsersRequest{
        RequestBody: operations.CodespacesSetCodespacesBillingUsersRequestBody{
            SelectedUsernames: []string{
                "dolores",
                "id",
                "minima",
                "dolore",
            },
        },
        Org: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesSetRepositoriesForSecretForAuthenticatedUser

Select the repositories that will use a user's codespace secret.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#set-selected-repositories-for-a-user-secret>

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
    res, err := s.Codespaces.CodespacesSetRepositoriesForSecretForAuthenticatedUser(ctx, operations.CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest{
        RequestBody: operations.CodespacesSetRepositoriesForSecretForAuthenticatedUserRequestBody{
            SelectedRepositoryIds: []int64{
                63207,
            },
        },
        SecretName: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#set-selected-repositories-for-an-organization-secret>

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
    res, err := s.Codespaces.CodespacesSetSelectedReposForOrgSecret(ctx, operations.CodespacesSetSelectedReposForOrgSecretRequest{
        RequestBody: operations.CodespacesSetSelectedReposForOrgSecretRequestBody{
            SelectedRepositoryIds: []int64{
                309251,
                477646,
                403218,
            },
        },
        Org: "ut",
        SecretName: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CodespacesStartForAuthenticatedUser

Starts a user's codespace.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#start-a-codespace-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesStartForAuthenticatedUser(ctx, operations.CodespacesStartForAuthenticatedUserRequest{
        CodespaceName: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Codespace != nil {
        // handle response
    }
}
```

## CodespacesStopForAuthenticatedUser

Stops a user's codespace.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#stop-a-codespace-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesStopForAuthenticatedUser(ctx, operations.CodespacesStopForAuthenticatedUserRequest{
        CodespaceName: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Codespace != nil {
        // handle response
    }
}
```

## CodespacesStopInOrganization

Stops a user's codespace.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces>

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
    res, err := s.Codespaces.CodespacesStopInOrganization(ctx, operations.CodespacesStopInOrganizationRequest{
        CodespaceName: "laudantium",
        Org: "eum",
        Username: "Fredy_Ward",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Codespace != nil {
        // handle response
    }
}
```

## CodespacesUpdateForAuthenticatedUser

Updates a codespace owned by the authenticated user. Currently only the codespace's machine type and recent folders can be modified using this endpoint.

If you specify a new machine type it will be applied the next time your codespace is started.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#update-a-codespace-for-the-authenticated-user>

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
    res, err := s.Codespaces.CodespacesUpdateForAuthenticatedUser(ctx, operations.CodespacesUpdateForAuthenticatedUserRequest{
        RequestBody: &operations.CodespacesUpdateForAuthenticatedUserRequestBody{
            DisplayName: sdk.String("quis"),
            Machine: sdk.String("eum"),
            RecentFolders: []string{
                "provident",
                "aspernatur",
                "ullam",
                "quasi",
            },
        },
        CodespaceName: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Codespace != nil {
        // handle response
    }
}
```
