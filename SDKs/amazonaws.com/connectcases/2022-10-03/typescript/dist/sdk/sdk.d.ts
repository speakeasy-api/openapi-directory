import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://cases.{region}.amazonaws.com", "https://cases.{region}.amazonaws.com", "http://cases.{region}.amazonaws.com.cn", "https://cases.{region}.amazonaws.com.cn"];
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
 * With Amazon Connect Cases, your agents can track and manage customer issues that require multiple interactions, follow-up tasks, and teams in your contact center. A case represents a customer issue. It records the issue, the steps and interactions taken to resolve the issue, and the outcome. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Amazon Connect Cases</a> in the <i>Amazon Connect Administrator Guide</i>.
 *
 * @see {@link https://docs.aws.amazon.com/cases/} - Amazon Web Services documentation
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
     * Returns the description for the list of fields in the request parameters.
     */
    batchGetField(req: operations.BatchGetFieldRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetFieldResponse>;
    /**
     * Creates and updates a set of field options for a single select field in a Cases domain.
     */
    batchPutFieldOptions(req: operations.BatchPutFieldOptionsRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutFieldOptionsResponse>;
    /**
     * <p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <note> <p>The following fields are required when creating a case:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;customer_id&lt;/code&gt; - You must provide the full customer profile ARN in this format: &lt;code&gt;arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;title&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/note&gt; </code></pre>
     */
    createCase(req: operations.CreateCaseRequest, config?: AxiosRequestConfig): Promise<operations.CreateCaseResponse>;
    /**
     * <p>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.</p> <important> <p>This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/required-permissions-iam-cases.html#onboard-cases-iam">Onboard to Cases</a>.</p> </important>
     */
    createDomain(req: operations.CreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainResponse>;
    /**
     * Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain.
     */
    createField(req: operations.CreateFieldRequest, config?: AxiosRequestConfig): Promise<operations.CreateFieldResponse>;
    /**
     * <p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>
     */
    createLayout(req: operations.CreateLayoutRequest, config?: AxiosRequestConfig): Promise<operations.CreateLayoutResponse>;
    /**
     * <p>Creates a related item (comments, tasks, and contacts) and associates it with a case.</p> <note> <p>A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a <code>contactArn</code>). All Related Items have their own internal identifier, the <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and <code>contacts</code>.</p> </note>
     */
    createRelatedItem(req: operations.CreateRelatedItemRequest, config?: AxiosRequestConfig): Promise<operations.CreateRelatedItemResponse>;
    /**
     * Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.
     */
    createTemplate(req: operations.CreateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateTemplateResponse>;
    /**
     * Deletes a domain.
     */
    deleteDomain(req: operations.DeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainResponse>;
    /**
     * Returns information about a specific case if it exists.
     */
    getCase(req: operations.GetCaseRequest, config?: AxiosRequestConfig): Promise<operations.GetCaseResponse>;
    /**
     * Returns the case event publishing configuration.
     */
    getCaseEventConfiguration(req: operations.GetCaseEventConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetCaseEventConfigurationResponse>;
    /**
     * Returns information about a specific domain if it exists.
     */
    getDomain(req: operations.GetDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainResponse>;
    /**
     * Returns the details for the requested layout.
     */
    getLayout(req: operations.GetLayoutRequest, config?: AxiosRequestConfig): Promise<operations.GetLayoutResponse>;
    /**
     * Returns the details for the requested template.
     */
    getTemplate(req: operations.GetTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateResponse>;
    /**
     * Lists cases for a given contact.
     */
    listCasesForContact(req: operations.ListCasesForContactRequest, config?: AxiosRequestConfig): Promise<operations.ListCasesForContactResponse>;
    /**
     * Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.
     */
    listDomains(req: operations.ListDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainsResponse>;
    /**
     * Lists all of the field options for a field identifier in the domain.
     */
    listFieldOptions(req: operations.ListFieldOptionsRequest, config?: AxiosRequestConfig): Promise<operations.ListFieldOptionsResponse>;
    /**
     * Lists all fields in a Cases domain.
     */
    listFields(req: operations.ListFieldsRequest, config?: AxiosRequestConfig): Promise<operations.ListFieldsResponse>;
    /**
     * Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.
     */
    listLayouts(req: operations.ListLayoutsRequest, config?: AxiosRequestConfig): Promise<operations.ListLayoutsResponse>;
    /**
     * Lists tags for a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template.
     */
    listTemplates(req: operations.ListTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListTemplatesResponse>;
    /**
     * API for adding case event publishing configuration
     */
    putCaseEventConfiguration(req: operations.PutCaseEventConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutCaseEventConfigurationResponse>;
    /**
     * <p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>
     */
    searchCases(req: operations.SearchCasesRequest, config?: AxiosRequestConfig): Promise<operations.SearchCasesResponse>;
    /**
     * <p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>
     */
    searchRelatedItems(req: operations.SearchRelatedItemsRequest, config?: AxiosRequestConfig): Promise<operations.SearchRelatedItemsResponse>;
    /**
     * Adds tags to a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Untags a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the <code>CreateCase</code> input .</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
     */
    updateCase(req: operations.UpdateCaseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCaseResponse>;
    /**
     * Updates the properties of an existing field.
     */
    updateField(req: operations.UpdateFieldRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFieldResponse>;
    /**
     * <p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>
     */
    updateLayout(req: operations.UpdateLayoutRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLayoutResponse>;
    /**
     * Updates the attributes of an existing template. The template attributes that can be modified include <code>name</code>, <code>description</code>, <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.
     */
    updateTemplate(req: operations.UpdateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTemplateResponse>;
}
