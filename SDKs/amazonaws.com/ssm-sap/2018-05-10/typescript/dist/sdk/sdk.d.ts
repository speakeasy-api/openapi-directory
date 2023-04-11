import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://ssm-sap.{region}.amazonaws.com", "https://ssm-sap.{region}.amazonaws.com", "http://ssm-sap.{region}.amazonaws.com.cn", "https://ssm-sap.{region}.amazonaws.com.cn"];
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
 * This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Systems Manager for SAP. The topic for each action shows the API request parameters and responses.
 *
 * @see {@link https://docs.aws.amazon.com/ssm-sap/} - Amazon Web Services documentation
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
     * Removes permissions associated with the target database.
     */
    deleteResourcePermission(req: operations.DeleteResourcePermissionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePermissionResponse>;
    /**
     * Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
     */
    deregisterApplication(req: operations.DeregisterApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterApplicationResponse>;
    /**
     * Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
     */
    getApplication(req: operations.GetApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * Gets the component of an application registered with AWS Systems Manager for SAP.
     */
    getComponent(req: operations.GetComponentRequest, config?: AxiosRequestConfig): Promise<operations.GetComponentResponse>;
    /**
     * Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
     */
    getDatabase(req: operations.GetDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabaseResponse>;
    /**
     * Gets the details of an operation by specifying the operation ID.
     */
    getOperation(req: operations.GetOperationRequest, config?: AxiosRequestConfig): Promise<operations.GetOperationResponse>;
    /**
     * Gets permissions associated with the target database.
     */
    getResourcePermission(req: operations.GetResourcePermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcePermissionResponse>;
    /**
     * Lists all the applications registered with AWS Systems Manager for SAP.
     */
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * Lists all the components registered with AWS Systems Manager for SAP.
     */
    listComponents(req: operations.ListComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentsResponse>;
    /**
     * Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
     */
    listDatabases(req: operations.ListDatabasesRequest, config?: AxiosRequestConfig): Promise<operations.ListDatabasesResponse>;
    /**
     * Lists the operations performed by AWS Systems Manager for SAP.
     */
    listOperations(req: operations.ListOperationsRequest, config?: AxiosRequestConfig): Promise<operations.ListOperationsResponse>;
    /**
     * Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Adds permissions to the target database.
     */
    putResourcePermission(req: operations.PutResourcePermissionRequest, config?: AxiosRequestConfig): Promise<operations.PutResourcePermissionResponse>;
    /**
     * <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>
     */
    registerApplication(req: operations.RegisterApplicationRequest, config?: AxiosRequestConfig): Promise<operations.RegisterApplicationResponse>;
    /**
     * Creates tag for a resource by specifying the ARN.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Delete the tags for a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the settings of an application registered with AWS Systems Manager for SAP.
     */
    updateApplicationSettings(req: operations.UpdateApplicationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationSettingsResponse>;
}
