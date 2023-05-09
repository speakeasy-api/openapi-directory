# SDK

## Overview

<p><fullname>Amazon Web Services Support App in Slack</fullname> <p>You can use the Amazon Web Services Support App in Slack API to manage your support cases in Slack for your Amazon Web Services account. After you configure your Slack workspace and channel with the Amazon Web Services Support App, you can perform the following tasks directly in your Slack channel:</p> <ul> <li> <p>Create, search, update, and resolve your support cases</p> </li> <li> <p>Request service quota increases for your account</p> </li> <li> <p>Invite Amazon Web Services Support agents to your channel so that you can chat directly about your support cases</p> </li> </ul> <p>For more information about how to perform these actions in Slack, see the following documentation in the <i>Amazon Web Services Support User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html">Amazon Web Services Support App in Slack</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/joining-a-live-chat-session.html">Joining a live chat session with Amazon Web Services Support</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/service-quota-increase.html">Requesting service quota increases</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-commands.html">Amazon Web Services Support App commands in Slack</a> </p> </li> </ul> <p>You can also use the Amazon Web Services Management Console instead of the Amazon Web Services Support App API to manage your Slack configurations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace to enable the Amazon Web Services Support App</a>.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the Amazon Web Services Support App API. </p> </li> <li> <p>For more information about the Amazon Web Services Support App endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/awssupport.html#awssupport_app_region">Amazon Web Services Support App in Slack endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p> </li> </ul> </note></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/supportapp/>
### Available Operations

* [createSlackChannelConfiguration](#createslackchannelconfiguration) - <p>Creates a Slack channel configuration for your Amazon Web Services account.</p> <note> <ul> <li> <p>You can add up to 5 Slack workspaces for your account.</p> </li> <li> <p>You can add up to 20 Slack channels for your account.</p> </li> </ul> </note> <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.</p> <note> <p>We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels. </p> </note>
* [deleteAccountAlias](#deleteaccountalias) - Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [deleteSlackChannelConfiguration](#deleteslackchannelconfiguration) - Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.
* [deleteSlackWorkspaceConfiguration](#deleteslackworkspaceconfiguration) - Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.
* [getAccountAlias](#getaccountalias) - Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [listSlackChannelConfigurations](#listslackchannelconfigurations) - Lists the Slack channel configurations for an Amazon Web Services account.
* [listSlackWorkspaceConfigurations](#listslackworkspaceconfigurations) - Lists the Slack workspace configurations for an Amazon Web Services account.
* [putAccountAlias](#putaccountalias) - Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
* [registerSlackWorkspaceForOrganization](#registerslackworkspacefororganization) - <p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.</p> <p>If you're the <i>management account</i> and you want to register Slack workspaces for your organization, you must complete the following tasks:</p> <ol> <li> <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and authorize the Slack workspaces where you want your organization to have access to. See <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User Guide</i>.</p> </li> <li> <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each Slack workspace for the organization.</p> </li> </ol> <p>After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p> <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p> <ul> <li> <p>Create an Identity and Access Management (IAM) role with the required permission. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p> </li> <li> <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p> </li> </ul>
* [updateSlackChannelConfiguration](#updateslackchannelconfiguration) - Updates the configuration for a Slack channel, such as case update notifications.

## createSlackChannelConfiguration

<p>Creates a Slack channel configuration for your Amazon Web Services account.</p> <note> <ul> <li> <p>You can add up to 5 Slack workspaces for your account.</p> </li> <li> <p>You can add up to 20 Slack channels for your account.</p> </li> </ul> </note> <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.</p> <note> <p>We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequest;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSlackChannelConfigurationRequest req = new CreateSlackChannelConfigurationRequest(                new CreateSlackChannelConfigurationRequestBody("debitis", "ipsa", CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum.HIGH, "tempora") {{
                                channelName = "suscipit";
                                notifyOnAddCorrespondenceToCase = false;
                                notifyOnCreateOrReopenCase = false;
                                notifyOnResolveCase = false;
                            }};) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
            }};            

            CreateSlackChannelConfigurationResponse res = sdk.sdk.createSlackChannelConfiguration(req);

            if (res.createSlackChannelConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccountAlias

Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountAliasRequest;
import org.openapis.openapi.models.operations.DeleteAccountAliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccountAliasRequest req = new DeleteAccountAliasRequest() {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "ab";
                xAmzCredential = "quis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeleteAccountAliasResponse res = sdk.sdk.deleteAccountAlias(req);

            if (res.deleteAccountAliasResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSlackChannelConfiguration

Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSlackChannelConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteSlackChannelConfigurationRequestBody;
import org.openapis.openapi.models.operations.DeleteSlackChannelConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSlackChannelConfigurationRequest req = new DeleteSlackChannelConfigurationRequest(                new DeleteSlackChannelConfigurationRequestBody("sapiente", "quo");) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            DeleteSlackChannelConfigurationResponse res = sdk.sdk.deleteSlackChannelConfiguration(req);

            if (res.deleteSlackChannelConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSlackWorkspaceConfiguration

Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSlackWorkspaceConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteSlackWorkspaceConfigurationRequestBody;
import org.openapis.openapi.models.operations.DeleteSlackWorkspaceConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSlackWorkspaceConfigurationRequest req = new DeleteSlackWorkspaceConfigurationRequest(                new DeleteSlackWorkspaceConfigurationRequestBody("totam");) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "dicta";
                xAmzDate = "nam";
                xAmzSecurityToken = "officia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "fugit";
            }};            

            DeleteSlackWorkspaceConfigurationResponse res = sdk.sdk.deleteSlackWorkspaceConfiguration(req);

            if (res.deleteSlackWorkspaceConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountAlias

Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountAliasRequest;
import org.openapis.openapi.models.operations.GetAccountAliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountAliasRequest req = new GetAccountAliasRequest() {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
            }};            

            GetAccountAliasResponse res = sdk.sdk.getAccountAlias(req);

            if (res.getAccountAliasResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSlackChannelConfigurations

Lists the Slack channel configurations for an Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSlackChannelConfigurationsRequest;
import org.openapis.openapi.models.operations.ListSlackChannelConfigurationsRequestBody;
import org.openapis.openapi.models.operations.ListSlackChannelConfigurationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSlackChannelConfigurationsRequest req = new ListSlackChannelConfigurationsRequest(                new ListSlackChannelConfigurationsRequestBody() {{
                                nextToken = "impedit";
                            }};) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
                nextToken = "natus";
            }};            

            ListSlackChannelConfigurationsResponse res = sdk.sdk.listSlackChannelConfigurations(req);

            if (res.listSlackChannelConfigurationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSlackWorkspaceConfigurations

Lists the Slack workspace configurations for an Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSlackWorkspaceConfigurationsRequest;
import org.openapis.openapi.models.operations.ListSlackWorkspaceConfigurationsRequestBody;
import org.openapis.openapi.models.operations.ListSlackWorkspaceConfigurationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSlackWorkspaceConfigurationsRequest req = new ListSlackWorkspaceConfigurationsRequest(                new ListSlackWorkspaceConfigurationsRequestBody() {{
                                nextToken = "iste";
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
                nextToken = "corporis";
            }};            

            ListSlackWorkspaceConfigurationsResponse res = sdk.sdk.listSlackWorkspaceConfigurations(req);

            if (res.listSlackWorkspaceConfigurationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAccountAlias

Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountAliasRequest;
import org.openapis.openapi.models.operations.PutAccountAliasRequestBody;
import org.openapis.openapi.models.operations.PutAccountAliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountAliasRequest req = new PutAccountAliasRequest(                new PutAccountAliasRequestBody("iure");) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "architecto";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "est";
                xAmzSignedHeaders = "mollitia";
            }};            

            PutAccountAliasResponse res = sdk.sdk.putAccountAlias(req);

            if (res.putAccountAliasResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerSlackWorkspaceForOrganization

<p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.</p> <p>If you're the <i>management account</i> and you want to register Slack workspaces for your organization, you must complete the following tasks:</p> <ol> <li> <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and authorize the Slack workspaces where you want your organization to have access to. See <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User Guide</i>.</p> </li> <li> <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each Slack workspace for the organization.</p> </li> </ol> <p>After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p> <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p> <ul> <li> <p>Create an Identity and Access Management (IAM) role with the required permission. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p> </li> <li> <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterSlackWorkspaceForOrganizationRequest;
import org.openapis.openapi.models.operations.RegisterSlackWorkspaceForOrganizationRequestBody;
import org.openapis.openapi.models.operations.RegisterSlackWorkspaceForOrganizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterSlackWorkspaceForOrganizationRequest req = new RegisterSlackWorkspaceForOrganizationRequest(                new RegisterSlackWorkspaceForOrganizationRequestBody("dolores");) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            RegisterSlackWorkspaceForOrganizationResponse res = sdk.sdk.registerSlackWorkspaceForOrganization(req);

            if (res.registerSlackWorkspaceForOrganizationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSlackChannelConfiguration

Updates the configuration for a Slack channel, such as case update notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSlackChannelConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateSlackChannelConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum;
import org.openapis.openapi.models.operations.UpdateSlackChannelConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSlackChannelConfigurationRequest req = new UpdateSlackChannelConfigurationRequest(                new UpdateSlackChannelConfigurationRequestBody("excepturi", "accusantium") {{
                                channelName = "iure";
                                channelRoleArn = "culpa";
                                notifyOnAddCorrespondenceToCase = false;
                                notifyOnCaseSeverity = UpdateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum.HIGH;
                                notifyOnCreateOrReopenCase = false;
                                notifyOnResolveCase = false;
                            }};) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "mollitia";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellat";
            }};            

            UpdateSlackChannelConfigurationResponse res = sdk.sdk.updateSlackChannelConfiguration(req);

            if (res.updateSlackChannelConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
