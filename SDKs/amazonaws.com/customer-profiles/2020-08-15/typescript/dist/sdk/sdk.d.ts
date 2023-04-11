import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://profile.{region}.amazonaws.com", "https://profile.{region}.amazonaws.com", "http://profile.{region}.amazonaws.com.cn", "https://profile.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon Connect Customer Profiles</fullname> <p>Amazon Connect Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. If you're new to Amazon Connect, you might find it helpful to review the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/">Amazon Connect Administrator Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/profile/} - Amazon Web Services documentation
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
     * <p>Associates a new key value with a specific profile, such as a Contact Record ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>
     */
    addProfileKey(req: operations.AddProfileKeyRequest, config?: AxiosRequestConfig): Promise<operations.AddProfileKeyResponse>;
    /**
     * <p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p>
     */
    createDomain(req: operations.CreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainResponse>;
    /**
     *  Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo.
     */
    createIntegrationWorkflow(req: operations.CreateIntegrationWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.CreateIntegrationWorkflowResponse>;
    /**
     * <p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>
     */
    createProfile(req: operations.CreateProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateProfileResponse>;
    /**
     * Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.
     */
    deleteDomain(req: operations.DeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainResponse>;
    /**
     * Removes an integration from a specific domain.
     */
    deleteIntegration(req: operations.DeleteIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationResponse>;
    /**
     * Deletes the standard customer profile and all data pertaining to the profile.
     */
    deleteProfile(req: operations.DeleteProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileResponse>;
    /**
     * Removes a searchable key from a customer profile.
     */
    deleteProfileKey(req: operations.DeleteProfileKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileKeyResponse>;
    /**
     * Removes an object associated with a profile of a given ProfileObjectType.
     */
    deleteProfileObject(req: operations.DeleteProfileObjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileObjectResponse>;
    /**
     * Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.
     */
    deleteProfileObjectType(req: operations.DeleteProfileObjectTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileObjectTypeResponse>;
    /**
     * Deletes the specified workflow and all its corresponding resources. This is an async process.
     */
    deleteWorkflow(req: operations.DeleteWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkflowResponse>;
    /**
     * <p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. </p> <p>You can't view which profiles are matched and would be merged.</p> <important> <p>We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include <b>at least</b> two matching attributes. If your matching list includes too few attributes (such as only <code>FirstName</code> or only <code>LastName</code>), there may be a large number of matches. This increases the chances of erroneous merges.</p> </important>
     */
    getAutoMergingPreview(req: operations.GetAutoMergingPreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetAutoMergingPreviewResponse>;
    /**
     * Returns information about a specific domain.
     */
    getDomain(req: operations.GetDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainResponse>;
    /**
     * <p>Returns information about an Identity Resolution Job in a specific domain. </p> <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use Identity Resolution to consolidate similar profiles</a>.</p>
     */
    getIdentityResolutionJob(req: operations.GetIdentityResolutionJobRequest, config?: AxiosRequestConfig): Promise<operations.GetIdentityResolutionJobResponse>;
    /**
     * Returns an integration for a domain.
     */
    getIntegration(req: operations.GetIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationResponse>;
    /**
     * <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>
     */
    getMatches(req: operations.GetMatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetMatchesResponse>;
    /**
     * Returns the object types for a specific domain.
     */
    getProfileObjectType(req: operations.GetProfileObjectTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileObjectTypeResponse>;
    /**
     * <p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>
     */
    getProfileObjectTypeTemplate(req: operations.GetProfileObjectTypeTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileObjectTypeTemplateResponse>;
    /**
     * Get details of specified workflow.
     */
    getWorkflow(req: operations.GetWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowResponse>;
    /**
     * Get granular list of steps in workflow.
     */
    getWorkflowSteps(req: operations.GetWorkflowStepsRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowStepsResponse>;
    /**
     * Lists all of the integrations associated to a specific URI in the AWS account.
     */
    listAccountIntegrations(req: operations.ListAccountIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountIntegrationsResponse>;
    /**
     * Returns a list of all the domains for an AWS account that have been created.
     */
    listDomains(req: operations.ListDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainsResponse>;
    /**
     * Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by <code>JobStartTime</code>.
     */
    listIdentityResolutionJobs(req: operations.ListIdentityResolutionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListIdentityResolutionJobsResponse>;
    /**
     * Lists all of the integrations in your domain.
     */
    listIntegrations(req: operations.ListIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.ListIntegrationsResponse>;
    /**
     * Lists all of the template information for object types.
     */
    listProfileObjectTypeTemplates(req: operations.ListProfileObjectTypeTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListProfileObjectTypeTemplatesResponse>;
    /**
     * Lists all of the templates available within the service.
     */
    listProfileObjectTypes(req: operations.ListProfileObjectTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListProfileObjectTypesResponse>;
    /**
     * Returns a list of objects associated with a profile of a given ProfileObjectType.
     */
    listProfileObjects(req: operations.ListProfileObjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProfileObjectsResponse>;
    /**
     * Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Query to list all workflows.
     */
    listWorkflows(req: operations.ListWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkflowsResponse>;
    /**
     * <p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>
     */
    mergeProfiles(req: operations.MergeProfilesRequest, config?: AxiosRequestConfig): Promise<operations.MergeProfilesResponse>;
    /**
     * <p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p> <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html"> UntagResource</a>.</p>
     */
    putIntegration(req: operations.PutIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.PutIntegrationResponse>;
    /**
     * <p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>
     */
    putProfileObject(req: operations.PutProfileObjectRequest, config?: AxiosRequestConfig): Promise<operations.PutProfileObjectResponse>;
    /**
     * <p>Defines a ProfileObjectType.</p> <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
     */
    putProfileObjectType(req: operations.PutProfileObjectTypeRequest, config?: AxiosRequestConfig): Promise<operations.PutProfileObjectTypeResponse>;
    /**
     * <p>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p> <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>
     */
    searchProfiles(req: operations.SearchProfilesRequest, config?: AxiosRequestConfig): Promise<operations.SearchProfilesResponse>;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p> <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
     */
    updateDomain(req: operations.UpdateDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainResponse>;
    /**
     * <p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>
     */
    updateProfile(req: operations.UpdateProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfileResponse>;
}
