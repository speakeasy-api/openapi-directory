# Dependabot

## Overview

Endpoints to manage Dependabot.

### Available Operations

* [DependabotAddSelectedRepoToOrgSecret](#dependabotaddselectedrepotoorgsecret) - Add selected repository to an organization secret
* [DependabotCreateOrUpdateOrgSecret](#dependabotcreateorupdateorgsecret) - Create or update an organization secret
* [DependabotCreateOrUpdateRepoSecret](#dependabotcreateorupdatereposecret) - Create or update a repository secret
* [DependabotDeleteOrgSecret](#dependabotdeleteorgsecret) - Delete an organization secret
* [DependabotDeleteRepoSecret](#dependabotdeletereposecret) - Delete a repository secret
* [DependabotGetAlert](#dependabotgetalert) - Get a Dependabot alert
* [DependabotGetOrgPublicKey](#dependabotgetorgpublickey) - Get an organization public key
* [DependabotGetOrgSecret](#dependabotgetorgsecret) - Get an organization secret
* [DependabotGetRepoPublicKey](#dependabotgetrepopublickey) - Get a repository public key
* [DependabotGetRepoSecret](#dependabotgetreposecret) - Get a repository secret
* [DependabotListAlertsForEnterprise](#dependabotlistalertsforenterprise) - List Dependabot alerts for an enterprise
* [DependabotListAlertsForOrg](#dependabotlistalertsfororg) - List Dependabot alerts for an organization
* [DependabotListAlertsForRepo](#dependabotlistalertsforrepo) - List Dependabot alerts for a repository
* [DependabotListOrgSecrets](#dependabotlistorgsecrets) - List organization secrets
* [DependabotListRepoSecrets](#dependabotlistreposecrets) - List repository secrets
* [DependabotListSelectedReposForOrgSecret](#dependabotlistselectedreposfororgsecret) - List selected repositories for an organization secret
* [DependabotRemoveSelectedRepoFromOrgSecret](#dependabotremoveselectedrepofromorgsecret) - Remove selected repository from an organization secret
* [DependabotSetSelectedReposForOrgSecret](#dependabotsetselectedreposfororgsecret) - Set selected repositories for an organization secret
* [DependabotUpdateAlert](#dependabotupdatealert) - Update a Dependabot alert

## DependabotAddSelectedRepoToOrgSecret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#add-selected-repository-to-an-organization-secret>

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
    res, err := s.Dependabot.DependabotAddSelectedRepoToOrgSecret(ctx, operations.DependabotAddSelectedRepoToOrgSecretRequest{
        Org: "nostrum",
        RepositoryID: 652309,
        SecretName: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DependabotCreateOrUpdateOrgSecret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization
permission to use this endpoint.

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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#create-or-update-an-organization-secret>

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
    res, err := s.Dependabot.DependabotCreateOrUpdateOrgSecret(ctx, operations.DependabotCreateOrUpdateOrgSecretRequest{
        RequestBody: operations.DependabotCreateOrUpdateOrgSecretRequestBody{
            EncryptedValue: sdk.String("possimus"),
            KeyID: sdk.String("animi"),
            SelectedRepositoryIds: []string{
                "aliquid",
                "accusantium",
            },
            Visibility: operations.DependabotCreateOrUpdateOrgSecretRequestBodyVisibilityEnumSelected,
        },
        Org: "doloribus",
        SecretName: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## DependabotCreateOrUpdateRepoSecret

Creates or updates a repository secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository
permission to use this endpoint.

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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#create-or-update-a-repository-secret>

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
    res, err := s.Dependabot.DependabotCreateOrUpdateRepoSecret(ctx, operations.DependabotCreateOrUpdateRepoSecretRequest{
        RequestBody: operations.DependabotCreateOrUpdateRepoSecretRequestBody{
            EncryptedValue: sdk.String("in"),
            KeyID: sdk.String("nam"),
        },
        Owner: "earum",
        Repo: "officia",
        SecretName: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyObject != nil {
        // handle response
    }
}
```

## DependabotDeleteOrgSecret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#delete-an-organization-secret>

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
    res, err := s.Dependabot.DependabotDeleteOrgSecret(ctx, operations.DependabotDeleteOrgSecretRequest{
        Org: "placeat",
        SecretName: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DependabotDeleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#delete-a-repository-secret>

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
    res, err := s.Dependabot.DependabotDeleteRepoSecret(ctx, operations.DependabotDeleteRepoSecretRequest{
        Owner: "voluptatibus",
        Repo: "molestias",
        SecretName: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DependabotGetAlert

You must use an access token with the `security_events` scope to use this endpoint with private repositories.
You can also use tokens with the `public_repo` scope for public repositories only.
GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#get-a-dependabot-alert>

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
    res, err := s.Dependabot.DependabotGetAlert(ctx, operations.DependabotGetAlertRequest{
        AlertNumber: 956933,
        Owner: "cumque",
        Repo: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotAlert != nil {
        // handle response
    }
}
```

## DependabotGetOrgPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#get-an-organization-public-key>

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
    res, err := s.Dependabot.DependabotGetOrgPublicKey(ctx, operations.DependabotGetOrgPublicKeyRequest{
        Org: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotPublicKey != nil {
        // handle response
    }
}
```

## DependabotGetOrgSecret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#get-an-organization-secret>

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
    res, err := s.Dependabot.DependabotGetOrgSecret(ctx, operations.DependabotGetOrgSecretRequest{
        Org: "tempora",
        SecretName: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationDependabotSecret != nil {
        // handle response
    }
}
```

## DependabotGetRepoPublicKey

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#get-a-repository-public-key>

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
    res, err := s.Dependabot.DependabotGetRepoPublicKey(ctx, operations.DependabotGetRepoPublicKeyRequest{
        Owner: "inventore",
        Repo: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotPublicKey != nil {
        // handle response
    }
}
```

## DependabotGetRepoSecret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#get-a-repository-secret>

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
    res, err := s.Dependabot.DependabotGetRepoSecret(ctx, operations.DependabotGetRepoSecretRequest{
        Owner: "cumque",
        Repo: "quae",
        SecretName: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotSecret != nil {
        // handle response
    }
}
```

## DependabotListAlertsForEnterprise

Lists Dependabot alerts for repositories that are owned by the specified enterprise.
To use this endpoint, you must be a member of the enterprise, and you must use an
access token with the `repo` scope or `security_events` scope.
Alerts are only returned for organizations in the enterprise for which you are an organization owner or a security manager. For more information about security managers, see "[Managing security managers in your organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/dependabot/alerts#list-dependabot-alerts-for-an-enterprise>

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
    res, err := s.Dependabot.DependabotListAlertsForEnterprise(ctx, operations.DependabotListAlertsForEnterpriseRequest{
        After: sdk.String("velit"),
        Before: sdk.String("aspernatur"),
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Ecosystem: sdk.String("eius"),
        Enterprise: "rem",
        First: sdk.Int64(871083),
        Last: sdk.Int64(773084),
        Package: sdk.String("eos"),
        PerPage: sdk.Int64(958741),
        Scope: shared.DependabotAlertScopeEnumDevelopment.ToPointer(),
        Severity: sdk.String("dicta"),
        Sort: shared.DependabotAlertSortEnumCreated.ToPointer(),
        State: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotAlertWithRepositories != nil {
        // handle response
    }
}
```

## DependabotListAlertsForOrg

Lists Dependabot alerts for an organization.

To use this endpoint, you must be an owner or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.

For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/dependabot/alerts#list-dependabot-alerts-for-an-organization>

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
    res, err := s.Dependabot.DependabotListAlertsForOrg(ctx, operations.DependabotListAlertsForOrgRequest{
        After: sdk.String("cupiditate"),
        Before: sdk.String("provident"),
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Ecosystem: sdk.String("soluta"),
        First: sdk.Int64(940782),
        Last: sdk.Int64(848151),
        Org: "eaque",
        Package: sdk.String("earum"),
        PerPage: sdk.Int64(596211),
        Scope: shared.DependabotAlertScopeEnumRuntime.ToPointer(),
        Severity: sdk.String("debitis"),
        Sort: shared.DependabotAlertSortEnumCreated.ToPointer(),
        State: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotAlertWithRepositories != nil {
        // handle response
    }
}
```

## DependabotListAlertsForRepo

You must use an access token with the `security_events` scope to use this endpoint with private repositories.
You can also use tokens with the `public_repo` scope for public repositories only.
GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#list-dependabot-alerts-for-a-repository>

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
    res, err := s.Dependabot.DependabotListAlertsForRepo(ctx, operations.DependabotListAlertsForRepoRequest{
        After: sdk.String("suscipit"),
        Before: sdk.String("dolorem"),
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Ecosystem: sdk.String("cumque"),
        First: sdk.Int64(684935),
        Last: sdk.Int64(189062),
        Manifest: sdk.String("animi"),
        Owner: "necessitatibus",
        Package: sdk.String("nulla"),
        Page: sdk.Int64(8931),
        PerPage: sdk.Int64(97258),
        Repo: "et",
        Scope: shared.DependabotAlertScopeEnumDevelopment.ToPointer(),
        Severity: sdk.String("natus"),
        Sort: shared.DependabotAlertSortEnumUpdated.ToPointer(),
        State: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotAlerts != nil {
        // handle response
    }
}
```

## DependabotListOrgSecrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#list-organization-secrets>

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
    res, err := s.Dependabot.DependabotListOrgSecrets(ctx, operations.DependabotListOrgSecretsRequest{
        Org: "adipisci",
        Page: sdk.Int64(96562),
        PerPage: sdk.Int64(169025),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotListOrgSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DependabotListRepoSecrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#list-repository-secrets>

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
    res, err := s.Dependabot.DependabotListRepoSecrets(ctx, operations.DependabotListRepoSecretsRequest{
        Owner: "doloribus",
        Page: sdk.Int64(859581),
        PerPage: sdk.Int64(896582),
        Repo: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotListRepoSecrets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DependabotListSelectedReposForOrgSecret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#list-selected-repositories-for-an-organization-secret>

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
    res, err := s.Dependabot.DependabotListSelectedReposForOrgSecret(ctx, operations.DependabotListSelectedReposForOrgSecretRequest{
        Org: "tempora",
        Page: sdk.Int64(470621),
        PerPage: sdk.Int64(473190),
        SecretName: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotListSelectedReposForOrgSecret200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DependabotRemoveSelectedRepoFromOrgSecret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#remove-selected-repository-from-an-organization-secret>

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
    res, err := s.Dependabot.DependabotRemoveSelectedRepoFromOrgSecret(ctx, operations.DependabotRemoveSelectedRepoFromOrgSecretRequest{
        Org: "iusto",
        RepositoryID: 457059,
        SecretName: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DependabotSetSelectedReposForOrgSecret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#set-selected-repositories-for-an-organization-secret>

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
    res, err := s.Dependabot.DependabotSetSelectedReposForOrgSecret(ctx, operations.DependabotSetSelectedReposForOrgSecretRequest{
        RequestBody: operations.DependabotSetSelectedReposForOrgSecretRequestBody{
            SelectedRepositoryIds: []int64{
                967260,
                423706,
                99958,
                857125,
            },
        },
        Org: "doloremque",
        SecretName: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DependabotUpdateAlert

You must use an access token with the `security_events` scope to use this endpoint with private repositories.
You can also use tokens with the `public_repo` scope for public repositories only.
GitHub Apps must have **Dependabot alerts** write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#update-a-dependabot-alert>

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
    res, err := s.Dependabot.DependabotUpdateAlert(ctx, operations.DependabotUpdateAlertRequest{
        RequestBody: operations.DependabotUpdateAlertRequestBody{
            DismissedComment: sdk.String("odio"),
            DismissedReason: operations.DependabotUpdateAlertRequestBodyDismissedReasonEnumInaccurate.ToPointer(),
            State: operations.DependabotUpdateAlertRequestBodyStateEnumDismissed,
        },
        AlertNumber: 403793,
        Owner: "consectetur",
        Repo: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DependabotAlert != nil {
        // handle response
    }
}
```
