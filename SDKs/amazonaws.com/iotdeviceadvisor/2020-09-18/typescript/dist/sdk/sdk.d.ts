import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.iotdeviceadvisor.{region}.amazonaws.com", "https://api.iotdeviceadvisor.{region}.amazonaws.com", "http://api.iotdeviceadvisor.{region}.amazonaws.com.cn", "https://api.iotdeviceadvisor.{region}.amazonaws.com.cn"];
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
 * Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the Amazon Web Services Partner Network to get your device qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in and wait for it to be tested.
 *
 * @see {@link https://docs.aws.amazon.com/iotdeviceadvisor/} - Amazon Web Services documentation
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
     * <p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>
     */
    createSuiteDefinition(req: operations.CreateSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSuiteDefinitionResponse>;
    /**
     * <p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>
     */
    deleteSuiteDefinition(req: operations.DeleteSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSuiteDefinitionResponse>;
    /**
     * Gets information about an Device Advisor endpoint.
     */
    getEndpoint(req: operations.GetEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetEndpointResponse>;
    /**
     * <p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>
     */
    getSuiteDefinition(req: operations.GetSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetSuiteDefinitionResponse>;
    /**
     * <p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>
     */
    getSuiteRun(req: operations.GetSuiteRunRequest, config?: AxiosRequestConfig): Promise<operations.GetSuiteRunResponse>;
    /**
     * <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>
     */
    getSuiteRunReport(req: operations.GetSuiteRunReportRequest, config?: AxiosRequestConfig): Promise<operations.GetSuiteRunReportResponse>;
    /**
     * <p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>
     */
    listSuiteDefinitions(req: operations.ListSuiteDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSuiteDefinitionsResponse>;
    /**
     * <p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>
     */
    listSuiteRuns(req: operations.ListSuiteRunsRequest, config?: AxiosRequestConfig): Promise<operations.ListSuiteRunsResponse>;
    /**
     * <p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>
     */
    startSuiteRun(req: operations.StartSuiteRunRequest, config?: AxiosRequestConfig): Promise<operations.StartSuiteRunResponse>;
    /**
     * <p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>
     */
    stopSuiteRun(req: operations.StopSuiteRunRequest, config?: AxiosRequestConfig): Promise<operations.StopSuiteRunResponse>;
    /**
     * <p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>
     */
    updateSuiteDefinition(req: operations.UpdateSuiteDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSuiteDefinitionResponse>;
}
