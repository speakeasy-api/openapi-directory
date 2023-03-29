# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/support-app/2021-08-20/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateSlackChannelConfigurationRequest{
        Headers: operations.CreateSlackChannelConfigurationHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateSlackChannelConfigurationRequestBody{
            ChannelID: "nulla",
            ChannelName: "nihil",
            ChannelRoleArn: "fuga",
            NotifyOnAddCorrespondenceToCase: false,
            NotifyOnCaseSeverity: "all",
            NotifyOnCreateOrReopenCase: false,
            NotifyOnResolveCase: false,
            TeamID: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.CreateSlackChannelConfiguration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSlackChannelConfigurationResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateSlackChannelConfiguration` - <p>Creates a Slack channel configuration for your Amazon Web Services account.</p> <note> <ul> <li> <p>You can add up to 5 Slack workspaces for your account.</p> </li> <li> <p>You can add up to 20 Slack channels for your account.</p> </li> </ul> </note> <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.</p> <note> <p>We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels. </p> </note>
* `DeleteAccountAlias` - Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* `DeleteSlackChannelConfiguration` - Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.
* `DeleteSlackWorkspaceConfiguration` - Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.
* `GetAccountAlias` - Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* `ListSlackChannelConfigurations` - Lists the Slack channel configurations for an Amazon Web Services account.
* `ListSlackWorkspaceConfigurations` - Lists the Slack workspace configurations for an Amazon Web Services account.
* `PutAccountAlias` - Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* `RegisterSlackWorkspaceForOrganization` - <p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.</p> <p>If you're the <i>management account</i> and you want to register Slack workspaces for your organization, you must complete the following tasks:</p> <ol> <li> <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and authorize the Slack workspaces where you want your organization to have access to. See <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User Guide</i>.</p> </li> <li> <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each Slack workspace for the organization.</p> </li> </ol> <p>After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p> <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p> <ul> <li> <p>Create an Identity and Access Management (IAM) role with the required permission. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p> </li> <li> <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p> </li> </ul>
* `UpdateSlackChannelConfiguration` - Updates the configuration for a Slack channel, such as case update notifications.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
