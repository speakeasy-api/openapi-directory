import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://kafkaconnect.{region}.amazonaws.com", "https://kafkaconnect.{region}.amazonaws.com", "http://kafkaconnect.{region}.amazonaws.com.cn", "https://kafkaconnect.{region}.amazonaws.com.cn"];
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
 * <p/>
 *
 * @see {@link https://docs.aws.amazon.com/kafkaconnect/} - Amazon Web Services documentation
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
     * Creates a connector using the specified properties.
     */
    createConnector(req: operations.CreateConnectorRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectorResponse>;
    /**
     * Creates a custom plugin using the specified properties.
     */
    createCustomPlugin(req: operations.CreateCustomPluginRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomPluginResponse>;
    /**
     * Creates a worker configuration using the specified properties.
     */
    createWorkerConfiguration(req: operations.CreateWorkerConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkerConfigurationResponse>;
    /**
     * Deletes the specified connector.
     */
    deleteConnector(req: operations.DeleteConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorResponse>;
    /**
     * Deletes a custom plugin.
     */
    deleteCustomPlugin(req: operations.DeleteCustomPluginRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomPluginResponse>;
    /**
     * Returns summary information about the connector.
     */
    describeConnector(req: operations.DescribeConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorResponse>;
    /**
     * A summary description of the custom plugin.
     */
    describeCustomPlugin(req: operations.DescribeCustomPluginRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomPluginResponse>;
    /**
     * Returns information about a worker configuration.
     */
    describeWorkerConfiguration(req: operations.DescribeWorkerConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkerConfigurationResponse>;
    /**
     * Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
     */
    listConnectors(req: operations.ListConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectorsResponse>;
    /**
     * Returns a list of all of the custom plugins in this account and Region.
     */
    listCustomPlugins(req: operations.ListCustomPluginsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomPluginsResponse>;
    /**
     * Returns a list of all of the worker configurations in this account and Region.
     */
    listWorkerConfigurations(req: operations.ListWorkerConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkerConfigurationsResponse>;
    /**
     * Updates the specified connector.
     */
    updateConnector(req: operations.UpdateConnectorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectorResponse>;
}
