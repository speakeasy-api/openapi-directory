import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://servicecatalog-appregistry.{region}.amazonaws.com", "https://servicecatalog-appregistry.{region}.amazonaws.com", "http://servicecatalog-appregistry.{region}.amazonaws.com.cn", "https://servicecatalog-appregistry.{region}.amazonaws.com.cn"];
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
 *  Amazon Web Services Service Catalog AppRegistry enables organizations to understand the application context of their Amazon Web Services resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise.
 *
 * @see {@link https://docs.aws.amazon.com/servicecatalog-appregistry/} - Amazon Web Services documentation
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
     * Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
     */
    associateAttributeGroup(req: operations.AssociateAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.AssociateAttributeGroupResponse>;
    /**
     *  Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name.
     */
    associateResource(req: operations.AssociateResourceRequest, config?: AxiosRequestConfig): Promise<operations.AssociateResourceResponse>;
    /**
     * Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
     */
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
     */
    createAttributeGroup(req: operations.CreateAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateAttributeGroupResponse>;
    /**
     * Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.
     */
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Deletes an attribute group, specified either by its attribute group ID, name, or ARN.
     */
    deleteAttributeGroup(req: operations.DeleteAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributeGroupResponse>;
    /**
     * Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.
     */
    disassociateAttributeGroup(req: operations.DisassociateAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateAttributeGroupResponse>;
    /**
     * Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
     */
    disassociateResource(req: operations.DisassociateResourceRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateResourceResponse>;
    /**
     *  Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem.
     */
    getApplication(req: operations.GetApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * Gets the resource associated with the application.
     */
    getAssociatedResource(req: operations.GetAssociatedResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociatedResourceResponse>;
    /**
     *  Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name.
     */
    getAttributeGroup(req: operations.GetAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributeGroupResponse>;
    /**
     *  Retrieves a <code>TagKey</code> configuration from an account.
     */
    getConfiguration(req: operations.GetConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationResponse>;
    /**
     * Retrieves a list of all of your applications. Results are paginated.
     */
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * Lists all attribute groups that are associated with specified application. Results are paginated.
     */
    listAssociatedAttributeGroups(req: operations.ListAssociatedAttributeGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedAttributeGroupsResponse>;
    /**
     * <p> Lists all of the resources that are associated with the specified application. Results are paginated. </p> <note> <p> If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API. </p> </note>
     */
    listAssociatedResources(req: operations.ListAssociatedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedResourcesResponse>;
    /**
     * Lists all attribute groups which you have access to. Results are paginated.
     */
    listAttributeGroups(req: operations.ListAttributeGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListAttributeGroupsResponse>;
    /**
     * Lists the details of all attribute groups associated with a specific application. The results display in pages.
     */
    listAttributeGroupsForApplication(req: operations.ListAttributeGroupsForApplicationRequest, config?: AxiosRequestConfig): Promise<operations.ListAttributeGroupsForApplicationResponse>;
    /**
     * Lists all of the tags on the resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     *  Associates a <code>TagKey</code> configuration to an account.
     */
    putConfiguration(req: operations.PutConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationResponse>;
    /**
     * <p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
     */
    syncResource(req: operations.SyncResourceRequest, config?: AxiosRequestConfig): Promise<operations.SyncResourceResponse>;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an existing application with new attributes.
     */
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * Updates an existing attribute group with new details.
     */
    updateAttributeGroup(req: operations.UpdateAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAttributeGroupResponse>;
}
