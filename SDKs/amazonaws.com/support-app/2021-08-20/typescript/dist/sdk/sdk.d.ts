import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://supportapp.{region}.amazonaws.com", "https://supportapp.{region}.amazonaws.com", "http://supportapp.{region}.amazonaws.com.cn", "https://supportapp.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p><fullname>Amazon Web Services Support App in Slack</fullname> <p>You can use the Amazon Web Services Support App in Slack API to manage your support cases in Slack for your Amazon Web Services account. After you configure your Slack workspace and channel with the Amazon Web Services Support App, you can perform the following tasks directly in your Slack channel:</p> <ul> <li> <p>Create, search, update, and resolve your support cases</p> </li> <li> <p>Request service quota increases for your account</p> </li> <li> <p>Invite Amazon Web Services Support agents to your channel so that you can chat directly about your support cases</p> </li> </ul> <p>For more information about how to perform these actions in Slack, see the following documentation in the <i>Amazon Web Services Support User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html">Amazon Web Services Support App in Slack</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/joining-a-live-chat-session.html">Joining a live chat session with Amazon Web Services Support</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/service-quota-increase.html">Requesting service quota increases</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-commands.html">Amazon Web Services Support App commands in Slack</a> </p> </li> </ul> <p>You can also use the Amazon Web Services Management Console instead of the Amazon Web Services Support App API to manage your Slack configurations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace to enable the Amazon Web Services Support App</a>.</p> <note> <ul> <li> <p>You must have a Business or Enterprise Support plan to use the Amazon Web Services Support App API. </p> </li> <li> <p>For more information about the Amazon Web Services Support App endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/awssupport.html#awssupport_app_region">Amazon Web Services Support App in Slack endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p> </li> </ul> </note></p>
 *
 * @see {@link https://docs.aws.amazon.com/supportapp/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Creates a Slack channel configuration for your Amazon Web Services account.</p> <note> <ul> <li> <p>You can add up to 5 Slack workspaces for your account.</p> </li> <li> <p>You can add up to 20 Slack channels for your account.</p> </li> </ul> </note> <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.</p> <note> <p>We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels. </p> </note>
     */
    createSlackChannelConfiguration(req: operations.CreateSlackChannelConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateSlackChannelConfigurationResponse>;
    /**
     * Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
     */
    deleteAccountAlias(req: operations.DeleteAccountAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountAliasResponse>;
    /**
     * Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.
     */
    deleteSlackChannelConfiguration(req: operations.DeleteSlackChannelConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSlackChannelConfigurationResponse>;
    /**
     * Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.
     */
    deleteSlackWorkspaceConfiguration(req: operations.DeleteSlackWorkspaceConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSlackWorkspaceConfigurationResponse>;
    /**
     * Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
     */
    getAccountAlias(req: operations.GetAccountAliasRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountAliasResponse>;
    /**
     * Lists the Slack channel configurations for an Amazon Web Services account.
     */
    listSlackChannelConfigurations(req: operations.ListSlackChannelConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListSlackChannelConfigurationsResponse>;
    /**
     * Lists the Slack workspace configurations for an Amazon Web Services account.
     */
    listSlackWorkspaceConfigurations(req: operations.ListSlackWorkspaceConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListSlackWorkspaceConfigurationsResponse>;
    /**
     * Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
     */
    putAccountAlias(req: operations.PutAccountAliasRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountAliasResponse>;
    /**
     * <p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.</p> <p>If you're the <i>management account</i> and you want to register Slack workspaces for your organization, you must complete the following tasks:</p> <ol> <li> <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and authorize the Slack workspaces where you want your organization to have access to. See <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User Guide</i>.</p> </li> <li> <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each Slack workspace for the organization.</p> </li> </ol> <p>After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p> <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p> <ul> <li> <p>Create an Identity and Access Management (IAM) role with the required permission. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p> </li> <li> <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p> </li> </ul>
     */
    registerSlackWorkspaceForOrganization(req: operations.RegisterSlackWorkspaceForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.RegisterSlackWorkspaceForOrganizationResponse>;
    /**
     * Updates the configuration for a Slack channel, such as case update notifications.
     */
    updateSlackChannelConfiguration(req: operations.UpdateSlackChannelConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSlackChannelConfigurationResponse>;
}
