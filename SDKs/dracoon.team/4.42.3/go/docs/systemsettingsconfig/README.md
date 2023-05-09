# SystemSettingsConfig

## Overview

System settings (mail server, logging, branding, default values etc.)

### Available Operations

* [RequestAuthConfig](#requestauthconfig) - Request authentication settings
* [RequestEventlogConfig](#requesteventlogconfig) - Request eventlog settings
* [RequestGeneralSettings](#requestgeneralsettings) - Request general settings
* [RequestInfrastructureProperties](#requestinfrastructureproperties) - Request infrastructure properties
* [RequestSyslogConfig](#requestsyslogconfig) - Request syslog settings
* [RequestSystemDefaults](#requestsystemdefaults) - Request system defaults
* [UpdateAuthConfig](#updateauthconfig) - Update authentication settings
* [UpdateEventlogConfig](#updateeventlogconfig) - Update eventlog settings
* [UpdateGeneralSettings](#updategeneralsettings) - Update general settings
* [UpdateSyslogConfig](#updatesyslogconfig) - Update syslog settings
* [UpdateSystemDefaults](#updatesystemdefaults) - Update system defaults

## RequestAuthConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON authentication configuration entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of configurable authentication methods.

### Further Information:
Authentication methods are sorted by priority attribute.  
Smaller values have higher priority.  
Authentication method with highest priority is considered as default.  
Priority **MUST** be a positive value.

### Configurable authentication settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Description |
| :--- | :--- |
| `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
| `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
| `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
| `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.RequestAuthConfig(ctx, operations.RequestAuthConfigRequest{
        XSdsAuthToken: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthConfig != nil {
        // handle response
    }
}
```

## RequestEventlogConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON eventlog configuration entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of configurable eventlog settings.

### Further Information:
None.

### Configurable eventlog settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `enabled` | Determines whether eventlog is enabled. | `true or false` |
| `retentionPeriod` | Retention period (in _days_) of eventlog entries.<br>After that period, all entries are deleted. | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted |
| `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.RequestEventlogConfig(ctx, operations.RequestEventlogConfigRequest{
        XSdsAuthToken: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventlogConfig != nil {
        // handle response
    }
}
```

## RequestGeneralSettings

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON general settings configuration entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of configurable general settings.

### Further Information:

### Auth token restrictions:

A restriction is a lower bound for a token timeout and defines a duration after which a token is invalidated when it wasn't used.  
The access/refresh token validity duration of the client is the upper bound. A token is invalidated - in any case - when it has passed.  

Auth token restrictions are enabled by default.

* Default access token validity: **2 hours**  
* Default refresh token validity: **30 days**

### Configurable general settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
| `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
| `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
| `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
| `useS3Storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
| `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
| `authTokenRestrictions` | Determines auth token restrictions. (e.g. restricted access token validity) | `object` |

</details>

### Deprecated configurable general settings:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting                           | Description | Value |
|:----------------------------------| :--- | :--- |
| <del>`mediaServerEnabled`</del>   | Determines whether media server is enabled.<br>Returns boolean value dependent on conjunction of `mediaServerConfigEnabled` AND `mediaServerEnabled` | `true or false` |
| <del>`weakPasswordEnabled`</del>  | Determines whether weak password is allowed.<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
| <del>`hideLoginInputFields`</del> | Determines whether input fields for login should be enabled | `true or false` |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.RequestGeneralSettings(ctx, operations.RequestGeneralSettingsRequest{
        XSdsAuthToken: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeneralSettings != nil {
        // handle response
    }
}
```

## RequestInfrastructureProperties

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON infrastructure properties entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of read-only infrastructure properties.

### Further Information:
Source: `core-service.properties`

### Read-only infrastructure properties:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `smsConfigEnabled` | Determines whether sending of share passwords via SMS is **system-wide** enabled. | `true or false` |
| `mediaServerConfigEnabled` | Determines whether media server is **system-wide** enabled. | `true or false` |
| `s3DefaultRegion` | Suggested S3 region | `Region name` |
| `s3EnforceDirectUpload` | Enforce direct upload to S3 | `true or false` |
| `dracoonCloud` | Determines if the **DRACOON Core** is deployed in the cloud environment | `true or false` |
| `tenantUuid` | Current tenant UUID | `UUID` |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.RequestInfrastructureProperties(ctx, operations.RequestInfrastructurePropertiesRequest{
        XSdsAuthToken: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InfrastructureProperties != nil {
        // handle response
    }
}
```

## RequestSyslogConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON syslog configuration entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of configurable syslog settings.

### Further Information:
None.

### Configurable syslog settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `enabled` | Determines whether syslog is enabled. | `true or false` |
| `host` | Syslog server (IP or FQDN) | `DNS name or IPv4 of a syslog server` |
| `port` | Syslog server port | `Valid port number` |
| `protocol` | Protocol to connect to syslog server | `TCP or UDP` |
| `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.RequestSyslogConfig(ctx, operations.RequestSyslogConfigRequest{
        XSdsAuthToken: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyslogConfig != nil {
        // handle response
    }
}
```

## RequestSystemDefaults

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON system defaults configuration entry point.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Returns a list of configurable system default values.

### Further Information:
None.

### Configurable default values
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
| `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999` |
| `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999` |
| `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999` |
| `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |

</details>

Tags for Identifying Languages
<https://tools.ietf.org/html/rfc5646>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.RequestSystemDefaults(ctx, operations.RequestSystemDefaultsRequest{
        XSdsAuthToken: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemDefaults != nil {
        // handle response
    }
}
```

## UpdateAuthConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON authentication configuration entry point.  
Change configurable authentication settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more authentication methods gets changed.

### Further Information:
Authentication methods are sorted by priority attribute.  
Smaller values have higher priority.  
Authentication method with highest priority is considered as default.  
Priority **MUST** be a positive value.

### Configurable authentication settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Description |
| :--- | :--- |
| `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
| `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
| `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
| `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.UpdateAuthConfig(ctx, operations.UpdateAuthConfigRequest{
        AuthConfig: shared.AuthConfig{
            AuthMethods: []shared.AuthMethod{
                shared.AuthMethod{
                    IsEnabled: false,
                    Name: "Van Bergnaum",
                    Priority: 675689,
                },
                shared.AuthMethod{
                    IsEnabled: false,
                    Name: "Shannon Lind",
                    Priority: 166047,
                },
            },
        },
        XSdsAuthToken: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthConfig != nil {
        // handle response
    }
}
```

## UpdateEventlogConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON eventlog configuration entry point.  
Change configurable eventlog settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more eventlog settings gets changed.

### Further Information:
None.

### Configurable eventlog settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `enabled` | Determines whether eventlog is enabled. | `true or false` |
| `retentionPeriod` | Retention period (in _days_) of eventlog entries.<br>After that period, all entries are deleted. | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: 7 |
| `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.UpdateEventlogConfig(ctx, operations.UpdateEventlogConfigRequest{
        UpdateEventlogConfig: shared.UpdateEventlogConfig{
            Enabled: sdk.Bool(false),
            LogIPEnabled: sdk.Bool(false),
            RetentionPeriod: sdk.Int(922757),
        },
        XSdsAuthToken: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventlogConfig != nil {
        // handle response
    }
}
```

## UpdateGeneralSettings

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON general settings configuration entry point.  
Change configurable general settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more general settings gets changed.

### Further Information:
Auth token restrictions are enabled by default.
    
* Default access token validity: **2 hours**  
* Default refresh token validity: **30 days**

### Configurable general settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
| `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
| `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
| `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
| `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
| `authTokenRestrictions` | Determines auth token restrictions. (e.g. restricted access token validity) | `object` |

</details>

### Deprecated configurable general settings:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting                           | Description | Value |
|:----------------------------------| :--- | :--- |
| <del>`mediaServerEnabled`</del>   | Determines whether media server is enabled.<br>**CANNOT** be enabled if media server configuration is disabled in `core-service.properties`.<br>Check `mediaServerConfigEnabled` with `GET /system/config/settings/infrastructure`. | `true or false` |
| <del>`weakPasswordEnabled`</del>  | Determines whether weak password is allowed.<br>Use `PUT /system/config/policies/passwords` API to change configured password policies. | `true or false` |
| <del>`hideLoginInputFields`</del> | Determines whether input fields for login should be enabled | `true or false` |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.UpdateGeneralSettings(ctx, operations.UpdateGeneralSettingsRequest{
        UpdateGeneralSettings: shared.UpdateGeneralSettings{
            AuthTokenRestrictions: &shared.UpdateAuthTokenRestrictions{
                AccessTokenValidity: sdk.Int(294076),
                OverwriteEnabled: false,
                RefreshTokenValidity: sdk.Int(482892),
            },
            CryptoEnabled: sdk.Bool(false),
            EmailNotificationButtonEnabled: sdk.Bool(false),
            EulaEnabled: sdk.Bool(false),
            HideLoginInputFields: sdk.Bool(false),
            MediaServerEnabled: sdk.Bool(false),
            S3TagsEnabled: sdk.Bool(false),
            SharePasswordSmsEnabled: sdk.Bool(false),
            WeakPasswordEnabled: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeneralSettings != nil {
        // handle response
    }
}
```

## UpdateSyslogConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON syslog configuration entry point.  
Change configurable syslog settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more syslog settings gets changed.

### Further Information:
None.

### Configurable syslog settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `enabled` | Set `true` to enable syslog. | `true or false` |
| `host` | Syslog server (IP or FQDN) | `DNS name or IPv4 of a syslog server` |
| `port` | Syslog server port | `Valid port number` |
| `protocol` | Protocol to connect to syslog server | `TCP or UDP` |
| `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |

</details>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.UpdateSyslogConfig(ctx, operations.UpdateSyslogConfigRequest{
        UpdateSyslogConfig: shared.UpdateSyslogConfig{
            Enabled: sdk.Bool(false),
            Host: sdk.String("sequi"),
            LogIPEnabled: sdk.Bool(false),
            Port: sdk.Int(493958),
            Protocol: shared.UpdateSyslogConfigProtocolEnumTCP.ToPointer(),
        },
        XSdsAuthToken: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyslogConfig != nil {
        // handle response
    }
}
```

## UpdateSystemDefaults

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>

### Description:  
DRACOON system defaults configuration entry point.  
Change configurable system default values.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
One or more system default values gets changed.

### Further Information:
None.

### Configurable default values
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
| `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
| `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
| `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
| `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |

</details>

Tags for Identifying Languages
<https://tools.ietf.org/html/rfc5646>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemSettingsConfig.UpdateSystemDefaults(ctx, operations.UpdateSystemDefaultsRequest{
        UpdateSystemDefaults: shared.UpdateSystemDefaults{
            DownloadShareDefaultExpirationPeriod: sdk.Int(535468),
            FileDefaultExpirationPeriod: sdk.Int(844235),
            LanguageDefault: sdk.String("iure"),
            NonmemberViewerDefault: sdk.Bool(false),
            UploadShareDefaultExpirationPeriod: sdk.Int(139072),
        },
        XSdsAuthToken: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemDefaults != nil {
        // handle response
    }
}
```
