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
 * <fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region">Regions and Endpoints</a>.</p>
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
     * Creates a new search domain.
     */
    getCreateDomain(req: operations.GETCreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateDomainResponse>;
    /**
     * Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
     */
    getDefineRankExpression(req: operations.GETDefineRankExpressionRequest, config?: AxiosRequestConfig): Promise<operations.GETDefineRankExpressionResponse>;
    /**
     * Permanently deletes a search domain and all of its data.
     */
    getDeleteDomain(req: operations.GETDeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDomainResponse>;
    /**
     * Removes an <code>IndexField</code> from the search domain.
     */
    getDeleteIndexField(req: operations.GETDeleteIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteIndexFieldResponse>;
    /**
     * Removes a <code>RankExpression</code> from the search domain.
     */
    getDeleteRankExpression(req: operations.GETDeleteRankExpressionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteRankExpressionResponse>;
    /**
     * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getDescribeAvailabilityOptions(req: operations.GETDescribeAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAvailabilityOptionsResponse>;
    /**
     * Gets the default search field configured for the search domain.
     */
    getDescribeDefaultSearchField(req: operations.GETDescribeDefaultSearchFieldRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDefaultSearchFieldResponse>;
    /**
     * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
     */
    getDescribeDomains(req: operations.GETDescribeDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeDomainsResponse>;
    /**
     * Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
     */
    getDescribeIndexFields(req: operations.GETDescribeIndexFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeIndexFieldsResponse>;
    /**
     * Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default.
     */
    getDescribeRankExpressions(req: operations.GETDescribeRankExpressionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeRankExpressionsResponse>;
    /**
     * Gets information about the resource-based policies that control access to the domain's document and search services.
     */
    getDescribeServiceAccessPolicies(req: operations.GETDescribeServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeServiceAccessPoliciesResponse>;
    /**
     * Gets the stemming dictionary configured for the search domain.
     */
    getDescribeStemmingOptions(req: operations.GETDescribeStemmingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeStemmingOptionsResponse>;
    /**
     * Gets the stopwords configured for the search domain.
     */
    getDescribeStopwordOptions(req: operations.GETDescribeStopwordOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeStopwordOptionsResponse>;
    /**
     * Gets the synonym dictionary configured for the search domain.
     */
    getDescribeSynonymOptions(req: operations.GETDescribeSynonymOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSynonymOptionsResponse>;
    /**
     * Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
     */
    getIndexDocuments(req: operations.GETIndexDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GETIndexDocumentsResponse>;
    /**
     * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    getUpdateAvailabilityOptions(req: operations.GETUpdateAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateAvailabilityOptionsResponse>;
    /**
     * Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields.
     */
    getUpdateDefaultSearchField(req: operations.GETUpdateDefaultSearchFieldRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateDefaultSearchFieldResponse>;
    /**
     * Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
     */
    getUpdateServiceAccessPolicies(req: operations.GETUpdateServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateServiceAccessPoliciesResponse>;
    /**
     * Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
     */
    getUpdateStemmingOptions(req: operations.GETUpdateStemmingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateStemmingOptionsResponse>;
    /**
     * Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
     */
    getUpdateStopwordOptions(req: operations.GETUpdateStopwordOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateStopwordOptionsResponse>;
    /**
     * Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB.
     */
    getUpdateSynonymOptions(req: operations.GETUpdateSynonymOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateSynonymOptionsResponse>;
    /**
     * Creates a new search domain.
     */
    postCreateDomain(req: operations.POSTCreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDomainResponse>;
    /**
     * Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
     */
    postDefineIndexField(req: operations.POSTDefineIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.POSTDefineIndexFieldResponse>;
    /**
     * Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
     */
    postDefineRankExpression(req: operations.POSTDefineRankExpressionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDefineRankExpressionResponse>;
    /**
     * Permanently deletes a search domain and all of its data.
     */
    postDeleteDomain(req: operations.POSTDeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDomainResponse>;
    /**
     * Removes an <code>IndexField</code> from the search domain.
     */
    postDeleteIndexField(req: operations.POSTDeleteIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteIndexFieldResponse>;
    /**
     * Removes a <code>RankExpression</code> from the search domain.
     */
    postDeleteRankExpression(req: operations.POSTDeleteRankExpressionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteRankExpressionResponse>;
    /**
     * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postDescribeAvailabilityOptions(req: operations.POSTDescribeAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAvailabilityOptionsResponse>;
    /**
     * Gets the default search field configured for the search domain.
     */
    postDescribeDefaultSearchField(req: operations.POSTDescribeDefaultSearchFieldRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDefaultSearchFieldResponse>;
    /**
     * Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
     */
    postDescribeDomains(req: operations.POSTDescribeDomainsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDomainsResponse>;
    /**
     * Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
     */
    postDescribeIndexFields(req: operations.POSTDescribeIndexFieldsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIndexFieldsResponse>;
    /**
     * Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default.
     */
    postDescribeRankExpressions(req: operations.POSTDescribeRankExpressionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeRankExpressionsResponse>;
    /**
     * Gets information about the resource-based policies that control access to the domain's document and search services.
     */
    postDescribeServiceAccessPolicies(req: operations.POSTDescribeServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeServiceAccessPoliciesResponse>;
    /**
     * Gets the stemming dictionary configured for the search domain.
     */
    postDescribeStemmingOptions(req: operations.POSTDescribeStemmingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeStemmingOptionsResponse>;
    /**
     * Gets the stopwords configured for the search domain.
     */
    postDescribeStopwordOptions(req: operations.POSTDescribeStopwordOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeStopwordOptionsResponse>;
    /**
     * Gets the synonym dictionary configured for the search domain.
     */
    postDescribeSynonymOptions(req: operations.POSTDescribeSynonymOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSynonymOptionsResponse>;
    /**
     * Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
     */
    postIndexDocuments(req: operations.POSTIndexDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.POSTIndexDocumentsResponse>;
    /**
     * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    postUpdateAvailabilityOptions(req: operations.POSTUpdateAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateAvailabilityOptionsResponse>;
    /**
     * Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields.
     */
    postUpdateDefaultSearchField(req: operations.POSTUpdateDefaultSearchFieldRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateDefaultSearchFieldResponse>;
    /**
     * Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
     */
    postUpdateServiceAccessPolicies(req: operations.POSTUpdateServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateServiceAccessPoliciesResponse>;
    /**
     * Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
     */
    postUpdateStemmingOptions(req: operations.POSTUpdateStemmingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateStemmingOptionsResponse>;
    /**
     * Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
     */
    postUpdateStopwordOptions(req: operations.POSTUpdateStopwordOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateStopwordOptionsResponse>;
    /**
     * Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB.
     */
    postUpdateSynonymOptions(req: operations.POSTUpdateSynonymOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateSynonymOptionsResponse>;
}
