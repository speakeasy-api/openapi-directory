import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://cloudsearch.{region}.amazonaws.com", "https://cloudsearch.{region}.amazonaws.com", "http://cloudsearch.{region}.amazonaws.com.cn", "https://cloudsearch.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/cloudsearch/} - Amazon Web Services documentation
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
     * Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getBuildSuggesters(req: operations.GETBuildSuggestersRequest, config?: AxiosRequestConfig): Promise<operations.GETBuildSuggestersResponse>;
    /**
     * Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getCreateDomain(req: operations.GETCreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateDomainResponse>;
    /**
     * Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDefineExpression(req: operations.GETDefineExpressionRequest, config?: AxiosRequestConfig): Promise<operations.GETDefineExpressionResponse>;
    /**
     * Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDeleteAnalysisScheme(req: operations.GETDeleteAnalysisSchemeRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteAnalysisSchemeResponse>;
    /**
     * Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDeleteDomain(req: operations.GETDeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDomainResponse>;
    /**
     * Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDeleteExpression(req: operations.GETDeleteExpressionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteExpressionResponse>;
    /**
     * Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDeleteIndexField(req: operations.GETDeleteIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteIndexFieldResponse>;
    /**
     * Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDeleteSuggester(req: operations.GETDeleteSuggesterRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteSuggesterResponse>;
    /**
     * Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDescribeAnalysisSchemes(req: operations.GETDescribeAnalysisSchemesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAnalysisSchemesResponse>;
    /**
     * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDescribeAvailabilityOptions(req: operations.GETDescribeAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAvailabilityOptionsResponse>;
    /**
     * Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDescribeDomainEndpointOptions(req: operations.GETDescribeDomainEndpointOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDomainEndpointOptionsResponse>;
    /**
     * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDescribeDomains(req: operations.GETDescribeDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDomainsResponse>;
    /**
     * Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDescribeExpressions(req: operations.GETDescribeExpressionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeExpressionsResponse>;
    /**
     * Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDescribeIndexFields(req: operations.GETDescribeIndexFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeIndexFieldsResponse>;
    /**
     * Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDescribeScalingParameters(req: operations.GETDescribeScalingParametersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeScalingParametersResponse>;
    /**
     * Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDescribeServiceAccessPolicies(req: operations.GETDescribeServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeServiceAccessPoliciesResponse>;
    /**
     * Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDescribeSuggesters(req: operations.GETDescribeSuggestersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSuggestersResponse>;
    /**
     * Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.
     */
    getIndexDocuments(req: operations.GETIndexDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GETIndexDocumentsResponse>;
    /**
     * Lists all search domains owned by an account.
     */
    getListDomainNames(req: operations.GETListDomainNamesRequest, config?: AxiosRequestConfig): Promise<operations.GETListDomainNamesResponse>;
    /**
     * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getUpdateAvailabilityOptions(req: operations.GETUpdateAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateAvailabilityOptionsResponse>;
    /**
     * Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getUpdateDomainEndpointOptions(req: operations.GETUpdateDomainEndpointOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateDomainEndpointOptionsResponse>;
    /**
     * Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getUpdateScalingParameters(req: operations.GETUpdateScalingParametersRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateScalingParametersResponse>;
    /**
     * Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.
     */
    getUpdateServiceAccessPolicies(req: operations.GETUpdateServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateServiceAccessPoliciesResponse>;
    /**
     * Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postBuildSuggesters(req: operations.POSTBuildSuggestersRequest, config?: AxiosRequestConfig): Promise<operations.POSTBuildSuggestersResponse>;
    /**
     * Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postCreateDomain(req: operations.POSTCreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDomainResponse>;
    /**
     * Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDefineAnalysisScheme(req: operations.POSTDefineAnalysisSchemeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDefineAnalysisSchemeResponse>;
    /**
     * Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDefineExpression(req: operations.POSTDefineExpressionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDefineExpressionResponse>;
    /**
     * Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDefineIndexField(req: operations.POSTDefineIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.POSTDefineIndexFieldResponse>;
    /**
     * Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDefineSuggester(req: operations.POSTDefineSuggesterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDefineSuggesterResponse>;
    /**
     * Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDeleteAnalysisScheme(req: operations.POSTDeleteAnalysisSchemeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteAnalysisSchemeResponse>;
    /**
     * Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDeleteDomain(req: operations.POSTDeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDomainResponse>;
    /**
     * Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDeleteExpression(req: operations.POSTDeleteExpressionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteExpressionResponse>;
    /**
     * Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDeleteIndexField(req: operations.POSTDeleteIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteIndexFieldResponse>;
    /**
     * Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDeleteSuggester(req: operations.POSTDeleteSuggesterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteSuggesterResponse>;
    /**
     * Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDescribeAnalysisSchemes(req: operations.POSTDescribeAnalysisSchemesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAnalysisSchemesResponse>;
    /**
     * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDescribeAvailabilityOptions(req: operations.POSTDescribeAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAvailabilityOptionsResponse>;
    /**
     * Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDescribeDomainEndpointOptions(req: operations.POSTDescribeDomainEndpointOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDomainEndpointOptionsResponse>;
    /**
     * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDescribeDomains(req: operations.POSTDescribeDomainsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDomainsResponse>;
    /**
     * Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDescribeExpressions(req: operations.POSTDescribeExpressionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeExpressionsResponse>;
    /**
     * Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDescribeIndexFields(req: operations.POSTDescribeIndexFieldsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIndexFieldsResponse>;
    /**
     * Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDescribeScalingParameters(req: operations.POSTDescribeScalingParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeScalingParametersResponse>;
    /**
     * Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDescribeServiceAccessPolicies(req: operations.POSTDescribeServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeServiceAccessPoliciesResponse>;
    /**
     * Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDescribeSuggesters(req: operations.POSTDescribeSuggestersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSuggestersResponse>;
    /**
     * Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.
     */
    postIndexDocuments(req: operations.POSTIndexDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.POSTIndexDocumentsResponse>;
    /**
     * Lists all search domains owned by an account.
     */
    postListDomainNames(req: operations.POSTListDomainNamesRequest, config?: AxiosRequestConfig): Promise<operations.POSTListDomainNamesResponse>;
    /**
     * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postUpdateAvailabilityOptions(req: operations.POSTUpdateAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateAvailabilityOptionsResponse>;
    /**
     * Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postUpdateDomainEndpointOptions(req: operations.POSTUpdateDomainEndpointOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateDomainEndpointOptionsResponse>;
    /**
     * Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postUpdateScalingParameters(req: operations.POSTUpdateScalingParametersRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateScalingParametersResponse>;
    /**
     * Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.
     */
    postUpdateServiceAccessPolicies(req: operations.POSTUpdateServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateServiceAccessPoliciesResponse>;
}
