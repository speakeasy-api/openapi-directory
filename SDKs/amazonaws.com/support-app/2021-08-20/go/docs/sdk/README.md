# SDK

## Overview

<p><fullname>Amazon Web Services Support App in Slack</fullname> <p>You can use the Amazon Web Services Support App in Slack API to manage your support cases in Slack for your Amazon Web Services account. After you configure your Slack workspace and channel with the Amazon Web Services Support App, you can perform the following tasks directly in your Slack channel:</p> <ul> <li> <p>Create, search, update, and resolve your support cases</p> </li> <li> <p>Request service quota increases for your account</p> </li> <li> <p>Invite Amazon Web Services Support agents to your channel so that you can chat directly about your support cases</p> </li> </ul> <p>For more information about how to perform these actions in Slack, see the following documentation in the <i>Amazon Web Services Support User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html">Amazon Web Services Support App in Slack</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/joining-a-live-chat-session.html">Joining a live chat session with Amazon Web Services Support</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/service-quota-increase.html">Requesting service quota increases</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-commands.html">Amazon Web Services Support App commands in Slack</a> </p> </li> </ul> <p>You can also use the Amazon Web Services Management Console instead of the Amazon Web Services Support App API to manage your Slack configurations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace to enable the Amazon Web Services Support App</a>.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the Amazon Web Services Support App API. </p> </li> <li> <p>For more information about the Amazon Web Services Support App endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/awssupport.html#awssupport_app_region">Amazon Web Services Support App in Slack endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p> </li> </ul> </note></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/supportapp/>
### Available Operations

* [CreateSlackChannelConfiguration](#createslackchannelconfiguration) - <p>Creates a Slack channel configuration for your Amazon Web Services account.</p> <note> <ul> <li> <p>You can add up to 5 Slack workspaces for your account.</p> </li> <li> <p>You can add up to 20 Slack channels for your account.</p> </li> </ul> </note> <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.</p> <note> <p>We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels. </p> </note>
* [DeleteAccountAlias](#deleteaccountalias) - Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [DeleteSlackChannelConfiguration](#deleteslackchannelconfiguration) - Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.
* [DeleteSlackWorkspaceConfiguration](#deleteslackworkspaceconfiguration) - Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.
* [GetAccountAlias](#getaccountalias) - Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [ListSlackChannelConfigurations](#listslackchannelconfigurations) - Lists the Slack channel configurations for an Amazon Web Services account.
* [ListSlackWorkspaceConfigurations](#listslackworkspaceconfigurations) - Lists the Slack workspace configurations for an Amazon Web Services account.
* [PutAccountAlias](#putaccountalias) - Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [RegisterSlackWorkspaceForOrganization](#registerslackworkspacefororganization) - <p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.</p> <p>If you're the <i>management account</i> and you want to register Slack workspaces for your organization, you must complete the following tasks:</p> <ol> <li> <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and authorize the Slack workspaces where you want your organization to have access to. See <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User Guide</i>.</p> </li> <li> <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each Slack workspace for the organization.</p> </li> </ol> <p>After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p> <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p> <ul> <li> <p>Create an Identity and Access Management (IAM) role with the required permission. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p> </li> <li> <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p> </li> </ul>
* [UpdateSlackChannelConfiguration](#updateslackchannelconfiguration) - Updates the configuration for a Slack channel, such as case update notifications.

## CreateSlackChannelConfiguration

<p>Creates a Slack channel configuration for your Amazon Web Services account.</p> <note> <ul> <li> <p>You can add up to 5 Slack workspaces for your account.</p> </li> <li> <p>You can add up to 20 Slack channels for your account.</p> </li> </ul> </note> <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.</p> <note> <p>We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels. </p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSlackChannelConfiguration(ctx, operations.CreateSlackChannelConfigurationRequest{
        RequestBody: operations.CreateSlackChannelConfigurationRequestBody{
            ChannelID: "iure",
            ChannelName: sdk.String("magnam"),
            ChannelRoleArn: "debitis",
            NotifyOnAddCorrespondenceToCase: sdk.Bool(false),
            NotifyOnCaseSeverity: operations.CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnumNone,
            NotifyOnCreateOrReopenCase: sdk.Bool(false),
            NotifyOnResolveCase: sdk.Bool(false),
            TeamID: "delectus",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSlackChannelConfigurationResult != nil {
        // handle response
    }
}
```

## DeleteAccountAlias

Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAccountAlias(ctx, operations.DeleteAccountAliasRequest{
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccountAliasResult != nil {
        // handle response
    }
}
```

## DeleteSlackChannelConfiguration

Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSlackChannelConfiguration(ctx, operations.DeleteSlackChannelConfigurationRequest{
        RequestBody: operations.DeleteSlackChannelConfigurationRequestBody{
            ChannelID: "deserunt",
            TeamID: "perferendis",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSlackChannelConfigurationResult != nil {
        // handle response
    }
}
```

## DeleteSlackWorkspaceConfiguration

Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSlackWorkspaceConfiguration(ctx, operations.DeleteSlackWorkspaceConfigurationRequest{
        RequestBody: operations.DeleteSlackWorkspaceConfigurationRequestBody{
            TeamID: "maiores",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSlackWorkspaceConfigurationResult != nil {
        // handle response
    }
}
```

## GetAccountAlias

Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAccountAlias(ctx, operations.GetAccountAliasRequest{
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountAliasResult != nil {
        // handle response
    }
}
```

## ListSlackChannelConfigurations

Lists the Slack channel configurations for an Amazon Web Services account.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSlackChannelConfigurations(ctx, operations.ListSlackChannelConfigurationsRequest{
        RequestBody: operations.ListSlackChannelConfigurationsRequestBody{
            NextToken: sdk.String("optio"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("impedit"),
        NextToken: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSlackChannelConfigurationsResult != nil {
        // handle response
    }
}
```

## ListSlackWorkspaceConfigurations

Lists the Slack workspace configurations for an Amazon Web Services account.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSlackWorkspaceConfigurations(ctx, operations.ListSlackWorkspaceConfigurationsRequest{
        RequestBody: operations.ListSlackWorkspaceConfigurationsRequestBody{
            NextToken: sdk.String("esse"),
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
        NextToken: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSlackWorkspaceConfigurationsResult != nil {
        // handle response
    }
}
```

## PutAccountAlias

Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutAccountAlias(ctx, operations.PutAccountAliasRequest{
        RequestBody: operations.PutAccountAliasRequestBody{
            AccountAlias: "dolor",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccountAliasResult != nil {
        // handle response
    }
}
```

## RegisterSlackWorkspaceForOrganization

<p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.</p> <p>If you're the <i>management account</i> and you want to register Slack workspaces for your organization, you must complete the following tasks:</p> <ol> <li> <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and authorize the Slack workspaces where you want your organization to have access to. See <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User Guide</i>.</p> </li> <li> <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each Slack workspace for the organization.</p> </li> </ol> <p>After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p> <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p> <ul> <li> <p>Create an Identity and Access Management (IAM) role with the required permission. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p> </li> <li> <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p> </li> </ul>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterSlackWorkspaceForOrganization(ctx, operations.RegisterSlackWorkspaceForOrganizationRequest{
        RequestBody: operations.RegisterSlackWorkspaceForOrganizationRequestBody{
            TeamID: "iste",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterSlackWorkspaceForOrganizationResult != nil {
        // handle response
    }
}
```

## UpdateSlackChannelConfiguration

Updates the configuration for a Slack channel, such as case update notifications.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSlackChannelConfiguration(ctx, operations.UpdateSlackChannelConfigurationRequest{
        RequestBody: operations.UpdateSlackChannelConfigurationRequestBody{
            ChannelID: "mollitia",
            ChannelName: sdk.String("laborum"),
            ChannelRoleArn: sdk.String("dolores"),
            NotifyOnAddCorrespondenceToCase: sdk.Bool(false),
            NotifyOnCaseSeverity: operations.UpdateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnumNone.ToPointer(),
            NotifyOnCreateOrReopenCase: sdk.Bool(false),
            NotifyOnResolveCase: sdk.Bool(false),
            TeamID: "corporis",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSlackChannelConfigurationResult != nil {
        // handle response
    }
}
```
