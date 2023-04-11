import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://appconfigdata.{region}.amazonaws.com", "https://appconfigdata.{region}.amazonaws.com", "http://appconfigdata.{region}.amazonaws.com.cn", "https://appconfigdata.{region}.amazonaws.com.cn"];
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
 * <p>AppConfig Data provides the data plane APIs your application uses to retrieve configuration data. Here's how it works:</p> <p>Your application retrieves configuration data by first establishing a configuration session using the AppConfig Data <a>StartConfigurationSession</a> API action. Your session's client then makes periodic calls to <a>GetLatestConfiguration</a> to check for and retrieve the latest data available.</p> <p>When calling <code>StartConfigurationSession</code>, your code sends the following information:</p> <ul> <li> <p>Identifiers (ID or name) of an AppConfig application, environment, and configuration profile that the session tracks.</p> </li> <li> <p>(Optional) The minimum amount of time the session's client must wait between calls to <code>GetLatestConfiguration</code>.</p> </li> </ul> <p>In response, AppConfig provides an <code>InitialConfigurationToken</code> to be given to the session's client and used the first time it calls <code>GetLatestConfiguration</code> for that session.</p> <important> <p>This token should only be used once in your first call to <code>GetLatestConfiguration</code>. You <i>must</i> use the new token in the <code>GetLatestConfiguration</code> response (<code>NextPollConfigurationToken</code>) in each subsequent call to <code>GetLatestConfiguration</code>.</p> </important> <p>When calling <code>GetLatestConfiguration</code>, your client code sends the most recent <code>ConfigurationToken</code> value it has and receives in response:</p> <ul> <li> <p> <code>NextPollConfigurationToken</code>: the <code>ConfigurationToken</code> value to use on the next call to <code>GetLatestConfiguration</code>.</p> </li> <li> <p> <code>NextPollIntervalInSeconds</code>: the duration the client should wait before making its next call to <code>GetLatestConfiguration</code>. This duration may vary over the course of the session, so it should be used instead of the value sent on the <code>StartConfigurationSession</code> call.</p> </li> <li> <p>The configuration: the latest data intended for the session. This may be empty if the client already has the latest version of the configuration.</p> </li> </ul> <important> <p>The <code>InitialConfigurationToken</code> and <code>NextPollConfigurationToken</code> should only be used once. To support long poll use cases, the tokens are valid for up to 24 hours. If a <code>GetLatestConfiguration</code> call uses an expired token, the system returns <code>BadRequestException</code>.</p> </important> <p>For more information and to view example CLI commands that show how to retrieve a configuration using the AppConfig Data <code>StartConfigurationSession</code> and <code>GetLatestConfiguration</code> API actions, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the configuration</a> in the <i>AppConfig User Guide</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/appconfigdata/} - Amazon Web Services documentation
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
     * <p>Retrieves the latest deployed configuration. This API may return empty configuration data if the client already has the latest version. For more information about this API action and to view example CLI commands that show how to use it with the <a>StartConfigurationSession</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the configuration</a> in the <i>AppConfig User Guide</i>. </p> <important> <p>Note the following important information.</p> <ul> <li> <p>Each configuration token is only valid for one call to <code>GetLatestConfiguration</code>. The <code>GetLatestConfiguration</code> response includes a <code>NextPollConfigurationToken</code> that should always replace the token used for the just-completed call in preparation for the next one. </p> </li> <li> <p> <code>GetLatestConfiguration</code> is a priced call. For more information, see <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p> </li> </ul> </important>
     */
    getLatestConfiguration(req: operations.GetLatestConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestConfigurationResponse>;
    /**
     * Starts a configuration session used to retrieve a deployed configuration. For more information about this API action and to view example CLI commands that show how to use it with the <a>GetLatestConfiguration</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the configuration</a> in the <i>AppConfig User Guide</i>.
     */
    startConfigurationSession(req: operations.StartConfigurationSessionRequest, config?: AxiosRequestConfig): Promise<operations.StartConfigurationSessionResponse>;
}
