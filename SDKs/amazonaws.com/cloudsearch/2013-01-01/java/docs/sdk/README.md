# SDK

## Overview

<fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudsearch/>
### Available Operations

* [getBuildSuggesters](#getbuildsuggesters) - Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getCreateDomain](#getcreatedomain) - Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDefineExpression](#getdefineexpression) - Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDeleteAnalysisScheme](#getdeleteanalysisscheme) - Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [getDeleteDomain](#getdeletedomain) - Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [getDeleteExpression](#getdeleteexpression) - Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDeleteIndexField](#getdeleteindexfield) - Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDeleteSuggester](#getdeletesuggester) - Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeAnalysisSchemes](#getdescribeanalysisschemes) - Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeAvailabilityOptions](#getdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeDomainEndpointOptions](#getdescribedomainendpointoptions) - Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeDomains](#getdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeExpressions](#getdescribeexpressions) - Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeIndexFields](#getdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeScalingParameters](#getdescribescalingparameters) - Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeServiceAccessPolicies](#getdescribeserviceaccesspolicies) - Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getDescribeSuggesters](#getdescribesuggesters) - Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getIndexDocuments](#getindexdocuments) - Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.
* [getListDomainNames](#getlistdomainnames) - Lists all search domains owned by an account.
* [getUpdateAvailabilityOptions](#getupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getUpdateDomainEndpointOptions](#getupdatedomainendpointoptions) - Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [getUpdateScalingParameters](#getupdatescalingparameters) - Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [getUpdateServiceAccessPolicies](#getupdateserviceaccesspolicies) - Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.
* [postBuildSuggesters](#postbuildsuggesters) - Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postCreateDomain](#postcreatedomain) - Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDefineAnalysisScheme](#postdefineanalysisscheme) - Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDefineExpression](#postdefineexpression) - Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDefineIndexField](#postdefineindexfield) - Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [postDefineSuggester](#postdefinesuggester) - Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDeleteAnalysisScheme](#postdeleteanalysisscheme) - Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [postDeleteDomain](#postdeletedomain) - Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [postDeleteExpression](#postdeleteexpression) - Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDeleteIndexField](#postdeleteindexfield) - Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDeleteSuggester](#postdeletesuggester) - Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeAnalysisSchemes](#postdescribeanalysisschemes) - Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeAvailabilityOptions](#postdescribeavailabilityoptions) - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeDomainEndpointOptions](#postdescribedomainendpointoptions) - Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeDomains](#postdescribedomains) - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeExpressions](#postdescribeexpressions) - Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeIndexFields](#postdescribeindexfields) - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeScalingParameters](#postdescribescalingparameters) - Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeServiceAccessPolicies](#postdescribeserviceaccesspolicies) - Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postDescribeSuggesters](#postdescribesuggesters) - Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postIndexDocuments](#postindexdocuments) - Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.
* [postListDomainNames](#postlistdomainnames) - Lists all search domains owned by an account.
* [postUpdateAvailabilityOptions](#postupdateavailabilityoptions) - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postUpdateDomainEndpointOptions](#postupdatedomainendpointoptions) - Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* [postUpdateScalingParameters](#postupdatescalingparameters) - Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. 
* [postUpdateServiceAccessPolicies](#postupdateserviceaccesspolicies) - Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.

## getBuildSuggesters

Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETBuildSuggestersActionEnum;
import org.openapis.openapi.models.operations.GETBuildSuggestersRequest;
import org.openapis.openapi.models.operations.GETBuildSuggestersResponse;
import org.openapis.openapi.models.operations.GETBuildSuggestersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETBuildSuggestersRequest req = new GETBuildSuggestersRequest(GETBuildSuggestersActionEnum.BUILD_SUGGESTERS, "deserunt", GETBuildSuggestersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            GETBuildSuggestersResponse res = sdk.sdk.getBuildSuggesters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateDomain

Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateDomainActionEnum;
import org.openapis.openapi.models.operations.GETCreateDomainRequest;
import org.openapis.openapi.models.operations.GETCreateDomainResponse;
import org.openapis.openapi.models.operations.GETCreateDomainVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateDomainRequest req = new GETCreateDomainRequest(GETCreateDomainActionEnum.CREATE_DOMAIN, "molestiae", GETCreateDomainVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            GETCreateDomainResponse res = sdk.sdk.getCreateDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDefineExpression

Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDefineExpressionActionEnum;
import org.openapis.openapi.models.operations.GETDefineExpressionExpression;
import org.openapis.openapi.models.operations.GETDefineExpressionRequest;
import org.openapis.openapi.models.operations.GETDefineExpressionResponse;
import org.openapis.openapi.models.operations.GETDefineExpressionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDefineExpressionRequest req = new GETDefineExpressionRequest(GETDefineExpressionActionEnum.DEFINE_EXPRESSION, "ab",                 new GETDefineExpressionExpression("quis", "veritatis");, GETDefineExpressionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            GETDefineExpressionResponse res = sdk.sdk.getDefineExpression(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteAnalysisScheme

Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteAnalysisSchemeActionEnum;
import org.openapis.openapi.models.operations.GETDeleteAnalysisSchemeRequest;
import org.openapis.openapi.models.operations.GETDeleteAnalysisSchemeResponse;
import org.openapis.openapi.models.operations.GETDeleteAnalysisSchemeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteAnalysisSchemeRequest req = new GETDeleteAnalysisSchemeRequest(GETDeleteAnalysisSchemeActionEnum.DELETE_ANALYSIS_SCHEME, "at", "maiores", GETDeleteAnalysisSchemeVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETDeleteAnalysisSchemeResponse res = sdk.sdk.getDeleteAnalysisScheme(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDomain

Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDomainActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDomainRequest;
import org.openapis.openapi.models.operations.GETDeleteDomainResponse;
import org.openapis.openapi.models.operations.GETDeleteDomainVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDomainRequest req = new GETDeleteDomainRequest(GETDeleteDomainActionEnum.DELETE_DOMAIN, "nam", GETDeleteDomainVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "fugit";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "hic";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "totam";
            }};            

            GETDeleteDomainResponse res = sdk.sdk.getDeleteDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteExpression

Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteExpressionActionEnum;
import org.openapis.openapi.models.operations.GETDeleteExpressionRequest;
import org.openapis.openapi.models.operations.GETDeleteExpressionResponse;
import org.openapis.openapi.models.operations.GETDeleteExpressionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteExpressionRequest req = new GETDeleteExpressionRequest(GETDeleteExpressionActionEnum.DELETE_EXPRESSION, "commodi", "molestiae", GETDeleteExpressionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETDeleteExpressionResponse res = sdk.sdk.getDeleteExpression(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteIndexField

Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteIndexFieldActionEnum;
import org.openapis.openapi.models.operations.GETDeleteIndexFieldRequest;
import org.openapis.openapi.models.operations.GETDeleteIndexFieldResponse;
import org.openapis.openapi.models.operations.GETDeleteIndexFieldVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteIndexFieldRequest req = new GETDeleteIndexFieldRequest(GETDeleteIndexFieldActionEnum.DELETE_INDEX_FIELD, "perferendis", "ad", GETDeleteIndexFieldVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            GETDeleteIndexFieldResponse res = sdk.sdk.getDeleteIndexField(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteSuggester

Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteSuggesterActionEnum;
import org.openapis.openapi.models.operations.GETDeleteSuggesterRequest;
import org.openapis.openapi.models.operations.GETDeleteSuggesterResponse;
import org.openapis.openapi.models.operations.GETDeleteSuggesterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteSuggesterRequest req = new GETDeleteSuggesterRequest(GETDeleteSuggesterActionEnum.DELETE_SUGGESTER, "fuga", "in", GETDeleteSuggesterVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "iste";
                xAmzCredential = "iure";
                xAmzDate = "saepe";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "ipsa";
            }};            

            GETDeleteSuggesterResponse res = sdk.sdk.getDeleteSuggester(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAnalysisSchemes

Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAnalysisSchemesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAnalysisSchemesRequest;
import org.openapis.openapi.models.operations.GETDescribeAnalysisSchemesResponse;
import org.openapis.openapi.models.operations.GETDescribeAnalysisSchemesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAnalysisSchemesRequest req = new GETDescribeAnalysisSchemesRequest(GETDescribeAnalysisSchemesActionEnum.DESCRIBE_ANALYSIS_SCHEMES, "est", GETDescribeAnalysisSchemesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                analysisSchemeNames = new String[]{{
                    add("laborum"),
                    add("dolores"),
                    add("dolorem"),
                }};
                deployed = false;
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            GETDescribeAnalysisSchemesResponse res = sdk.sdk.getDescribeAnalysisSchemes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAvailabilityOptions

Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAvailabilityOptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAvailabilityOptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeAvailabilityOptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeAvailabilityOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAvailabilityOptionsRequest req = new GETDescribeAvailabilityOptionsRequest(GETDescribeAvailabilityOptionsActionEnum.DESCRIBE_AVAILABILITY_OPTIONS, "accusantium", GETDescribeAvailabilityOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                deployed = false;
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
            }};            

            GETDescribeAvailabilityOptionsResponse res = sdk.sdk.getDescribeAvailabilityOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDomainEndpointOptions

Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDomainEndpointOptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDomainEndpointOptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeDomainEndpointOptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeDomainEndpointOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDomainEndpointOptionsRequest req = new GETDescribeDomainEndpointOptionsRequest(GETDescribeDomainEndpointOptionsActionEnum.DESCRIBE_DOMAIN_ENDPOINT_OPTIONS, "consequuntur", GETDescribeDomainEndpointOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                deployed = false;
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
            }};            

            GETDescribeDomainEndpointOptionsResponse res = sdk.sdk.getDescribeDomainEndpointOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDomains

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDomainsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDomainsRequest;
import org.openapis.openapi.models.operations.GETDescribeDomainsResponse;
import org.openapis.openapi.models.operations.GETDescribeDomainsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDomainsRequest req = new GETDescribeDomainsRequest(GETDescribeDomainsActionEnum.DESCRIBE_DOMAINS, GETDescribeDomainsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                domainNames = new String[]{{
                    add("quia"),
                    add("quis"),
                    add("vitae"),
                }};
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            GETDescribeDomainsResponse res = sdk.sdk.getDescribeDomains(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeExpressions

Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeExpressionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeExpressionsRequest;
import org.openapis.openapi.models.operations.GETDescribeExpressionsResponse;
import org.openapis.openapi.models.operations.GETDescribeExpressionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeExpressionsRequest req = new GETDescribeExpressionsRequest(GETDescribeExpressionsActionEnum.DESCRIBE_EXPRESSIONS, "id", GETDescribeExpressionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                deployed = false;
                expressionNames = new String[]{{
                    add("aut"),
                    add("quasi"),
                    add("error"),
                    add("temporibus"),
                }};
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "reiciendis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "praesentium";
            }};            

            GETDescribeExpressionsResponse res = sdk.sdk.getDescribeExpressions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeIndexFields

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeIndexFieldsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeIndexFieldsRequest;
import org.openapis.openapi.models.operations.GETDescribeIndexFieldsResponse;
import org.openapis.openapi.models.operations.GETDescribeIndexFieldsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeIndexFieldsRequest req = new GETDescribeIndexFieldsRequest(GETDescribeIndexFieldsActionEnum.DESCRIBE_INDEX_FIELDS, "ipsa", GETDescribeIndexFieldsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                deployed = false;
                fieldNames = new String[]{{
                    add("voluptate"),
                    add("cum"),
                    add("perferendis"),
                }};
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            GETDescribeIndexFieldsResponse res = sdk.sdk.getDescribeIndexFields(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeScalingParameters

Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeScalingParametersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeScalingParametersRequest;
import org.openapis.openapi.models.operations.GETDescribeScalingParametersResponse;
import org.openapis.openapi.models.operations.GETDescribeScalingParametersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeScalingParametersRequest req = new GETDescribeScalingParametersRequest(GETDescribeScalingParametersActionEnum.DESCRIBE_SCALING_PARAMETERS, "dicta", GETDescribeScalingParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            GETDescribeScalingParametersResponse res = sdk.sdk.getDescribeScalingParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeServiceAccessPolicies

Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeServiceAccessPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeServiceAccessPoliciesRequest;
import org.openapis.openapi.models.operations.GETDescribeServiceAccessPoliciesResponse;
import org.openapis.openapi.models.operations.GETDescribeServiceAccessPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeServiceAccessPoliciesRequest req = new GETDescribeServiceAccessPoliciesRequest(GETDescribeServiceAccessPoliciesActionEnum.DESCRIBE_SERVICE_ACCESS_POLICIES, "molestias", GETDescribeServiceAccessPoliciesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                deployed = false;
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            GETDescribeServiceAccessPoliciesResponse res = sdk.sdk.getDescribeServiceAccessPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeSuggesters

Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeSuggestersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeSuggestersRequest;
import org.openapis.openapi.models.operations.GETDescribeSuggestersResponse;
import org.openapis.openapi.models.operations.GETDescribeSuggestersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeSuggestersRequest req = new GETDescribeSuggestersRequest(GETDescribeSuggestersActionEnum.DESCRIBE_SUGGESTERS, "sint", GETDescribeSuggestersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                deployed = false;
                suggesterNames = new String[]{{
                    add("itaque"),
                }};
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETDescribeSuggestersResponse res = sdk.sdk.getDescribeSuggesters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndexDocuments

Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETIndexDocumentsActionEnum;
import org.openapis.openapi.models.operations.GETIndexDocumentsRequest;
import org.openapis.openapi.models.operations.GETIndexDocumentsResponse;
import org.openapis.openapi.models.operations.GETIndexDocumentsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETIndexDocumentsRequest req = new GETIndexDocumentsRequest(GETIndexDocumentsActionEnum.INDEX_DOCUMENTS, "quibusdam", GETIndexDocumentsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            GETIndexDocumentsResponse res = sdk.sdk.getIndexDocuments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListDomainNames

Lists all search domains owned by an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListDomainNamesActionEnum;
import org.openapis.openapi.models.operations.GETListDomainNamesRequest;
import org.openapis.openapi.models.operations.GETListDomainNamesResponse;
import org.openapis.openapi.models.operations.GETListDomainNamesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListDomainNamesRequest req = new GETListDomainNamesRequest(GETListDomainNamesActionEnum.LIST_DOMAIN_NAMES, GETListDomainNamesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "alias";
                xAmzDate = "fugit";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "tempora";
            }};            

            GETListDomainNamesResponse res = sdk.sdk.getListDomainNames(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateAvailabilityOptions

Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateAvailabilityOptionsActionEnum;
import org.openapis.openapi.models.operations.GETUpdateAvailabilityOptionsRequest;
import org.openapis.openapi.models.operations.GETUpdateAvailabilityOptionsResponse;
import org.openapis.openapi.models.operations.GETUpdateAvailabilityOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateAvailabilityOptionsRequest req = new GETUpdateAvailabilityOptionsRequest(GETUpdateAvailabilityOptionsActionEnum.UPDATE_AVAILABILITY_OPTIONS, "tempore", false, GETUpdateAvailabilityOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            GETUpdateAvailabilityOptionsResponse res = sdk.sdk.getUpdateAvailabilityOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateDomainEndpointOptions

Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateDomainEndpointOptionsActionEnum;
import org.openapis.openapi.models.operations.GETUpdateDomainEndpointOptionsDomainEndpointOptions;
import org.openapis.openapi.models.operations.GETUpdateDomainEndpointOptionsRequest;
import org.openapis.openapi.models.operations.GETUpdateDomainEndpointOptionsResponse;
import org.openapis.openapi.models.operations.GETUpdateDomainEndpointOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TLSSecurityPolicyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateDomainEndpointOptionsRequest req = new GETUpdateDomainEndpointOptionsRequest(GETUpdateDomainEndpointOptionsActionEnum.UPDATE_DOMAIN_ENDPOINT_OPTIONS,                 new GETUpdateDomainEndpointOptionsDomainEndpointOptions() {{
                                enforceHTTPS = false;
                                tlsSecurityPolicy = TLSSecurityPolicyEnum.POLICY_MIN_TLS12201907;
                            }};, "sint", GETUpdateDomainEndpointOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "debitis";
                xAmzDate = "a";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "in";
                xAmzSignedHeaders = "in";
            }};            

            GETUpdateDomainEndpointOptionsResponse res = sdk.sdk.getUpdateDomainEndpointOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateScalingParameters

Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateScalingParametersActionEnum;
import org.openapis.openapi.models.operations.GETUpdateScalingParametersRequest;
import org.openapis.openapi.models.operations.GETUpdateScalingParametersResponse;
import org.openapis.openapi.models.operations.GETUpdateScalingParametersScalingParameters;
import org.openapis.openapi.models.operations.GETUpdateScalingParametersVersionEnum;
import org.openapis.openapi.models.shared.PartitionInstanceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateScalingParametersRequest req = new GETUpdateScalingParametersRequest(GETUpdateScalingParametersActionEnum.UPDATE_SCALING_PARAMETERS, "maiores",                 new GETUpdateScalingParametersScalingParameters() {{
                                desiredInstanceType = PartitionInstanceTypeEnum.SEARCH_XLARGE;
                                desiredPartitionCount = 116202L;
                                desiredReplicationCount = 297437L;
                            }};, GETUpdateScalingParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "ea";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "non";
            }};            

            GETUpdateScalingParametersResponse res = sdk.sdk.getUpdateScalingParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateServiceAccessPolicies

Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateServiceAccessPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETUpdateServiceAccessPoliciesRequest;
import org.openapis.openapi.models.operations.GETUpdateServiceAccessPoliciesResponse;
import org.openapis.openapi.models.operations.GETUpdateServiceAccessPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateServiceAccessPoliciesRequest req = new GETUpdateServiceAccessPoliciesRequest("enim", GETUpdateServiceAccessPoliciesActionEnum.UPDATE_SERVICE_ACCESS_POLICIES, "accusamus", GETUpdateServiceAccessPoliciesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "provident";
                xAmzDate = "nam";
                xAmzSecurityToken = "id";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "deleniti";
            }};            

            GETUpdateServiceAccessPoliciesResponse res = sdk.sdk.getUpdateServiceAccessPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBuildSuggesters

Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTBuildSuggestersActionEnum;
import org.openapis.openapi.models.operations.POSTBuildSuggestersRequest;
import org.openapis.openapi.models.operations.POSTBuildSuggestersResponse;
import org.openapis.openapi.models.operations.POSTBuildSuggestersVersionEnum;
import org.openapis.openapi.models.shared.BuildSuggestersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTBuildSuggestersRequest req = new POSTBuildSuggestersRequest(POSTBuildSuggestersActionEnum.BUILD_SUGGESTERS, POSTBuildSuggestersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "amet".getBytes();
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            POSTBuildSuggestersResponse res = sdk.sdk.postBuildSuggesters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDomain

Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDomainActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDomainRequest;
import org.openapis.openapi.models.operations.POSTCreateDomainResponse;
import org.openapis.openapi.models.operations.POSTCreateDomainVersionEnum;
import org.openapis.openapi.models.shared.CreateDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDomainRequest req = new POSTCreateDomainRequest(POSTCreateDomainActionEnum.CREATE_DOMAIN, POSTCreateDomainVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "magnam".getBytes();
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTCreateDomainResponse res = sdk.sdk.postCreateDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDefineAnalysisScheme

Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDefineAnalysisSchemeActionEnum;
import org.openapis.openapi.models.operations.POSTDefineAnalysisSchemeRequest;
import org.openapis.openapi.models.operations.POSTDefineAnalysisSchemeResponse;
import org.openapis.openapi.models.operations.POSTDefineAnalysisSchemeVersionEnum;
import org.openapis.openapi.models.shared.AlgorithmicStemmingEnum;
import org.openapis.openapi.models.shared.AnalysisOptions;
import org.openapis.openapi.models.shared.AnalysisScheme;
import org.openapis.openapi.models.shared.AnalysisSchemeLanguageEnum;
import org.openapis.openapi.models.shared.DefineAnalysisSchemeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDefineAnalysisSchemeRequest req = new POSTDefineAnalysisSchemeRequest(POSTDefineAnalysisSchemeActionEnum.DEFINE_ANALYSIS_SCHEME, POSTDefineAnalysisSchemeVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "vero".getBytes();
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            POSTDefineAnalysisSchemeResponse res = sdk.sdk.postDefineAnalysisScheme(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDefineExpression

Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDefineExpressionActionEnum;
import org.openapis.openapi.models.operations.POSTDefineExpressionRequest;
import org.openapis.openapi.models.operations.POSTDefineExpressionResponse;
import org.openapis.openapi.models.operations.POSTDefineExpressionVersionEnum;
import org.openapis.openapi.models.shared.DefineExpressionRequest;
import org.openapis.openapi.models.shared.Expression;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDefineExpressionRequest req = new POSTDefineExpressionRequest(POSTDefineExpressionActionEnum.DEFINE_EXPRESSION, POSTDefineExpressionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "sint".getBytes();
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            POSTDefineExpressionResponse res = sdk.sdk.postDefineExpression(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDefineIndexField

Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDefineIndexFieldActionEnum;
import org.openapis.openapi.models.operations.POSTDefineIndexFieldRequest;
import org.openapis.openapi.models.operations.POSTDefineIndexFieldResponse;
import org.openapis.openapi.models.operations.POSTDefineIndexFieldVersionEnum;
import org.openapis.openapi.models.shared.DateArrayOptions;
import org.openapis.openapi.models.shared.DateOptions;
import org.openapis.openapi.models.shared.DefineIndexFieldRequest;
import org.openapis.openapi.models.shared.DoubleArrayOptions;
import org.openapis.openapi.models.shared.DoubleOptions;
import org.openapis.openapi.models.shared.IndexField;
import org.openapis.openapi.models.shared.IndexFieldTypeEnum;
import org.openapis.openapi.models.shared.IntArrayOptions;
import org.openapis.openapi.models.shared.IntOptions;
import org.openapis.openapi.models.shared.LatLonOptions;
import org.openapis.openapi.models.shared.LiteralArrayOptions;
import org.openapis.openapi.models.shared.LiteralOptions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TextArrayOptions;
import org.openapis.openapi.models.shared.TextOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDefineIndexFieldRequest req = new POSTDefineIndexFieldRequest(POSTDefineIndexFieldActionEnum.DEFINE_INDEX_FIELD, POSTDefineIndexFieldVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "odit".getBytes();
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "iure";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "maxime";
            }};            

            POSTDefineIndexFieldResponse res = sdk.sdk.postDefineIndexField(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDefineSuggester

Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDefineSuggesterActionEnum;
import org.openapis.openapi.models.operations.POSTDefineSuggesterRequest;
import org.openapis.openapi.models.operations.POSTDefineSuggesterResponse;
import org.openapis.openapi.models.operations.POSTDefineSuggesterVersionEnum;
import org.openapis.openapi.models.shared.DefineSuggesterRequest;
import org.openapis.openapi.models.shared.DocumentSuggesterOptions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Suggester;
import org.openapis.openapi.models.shared.SuggesterFuzzyMatchingEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDefineSuggesterRequest req = new POSTDefineSuggesterRequest(POSTDefineSuggesterActionEnum.DEFINE_SUGGESTER, POSTDefineSuggesterVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "architecto";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "nihil";
            }};            

            POSTDefineSuggesterResponse res = sdk.sdk.postDefineSuggester(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteAnalysisScheme

Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteAnalysisSchemeActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteAnalysisSchemeRequest;
import org.openapis.openapi.models.operations.POSTDeleteAnalysisSchemeResponse;
import org.openapis.openapi.models.operations.POSTDeleteAnalysisSchemeVersionEnum;
import org.openapis.openapi.models.shared.DeleteAnalysisSchemeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteAnalysisSchemeRequest req = new POSTDeleteAnalysisSchemeRequest(POSTDeleteAnalysisSchemeActionEnum.DELETE_ANALYSIS_SCHEME, POSTDeleteAnalysisSchemeVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "quibusdam".getBytes();
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "pariatur";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "natus";
            }};            

            POSTDeleteAnalysisSchemeResponse res = sdk.sdk.postDeleteAnalysisScheme(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDomain

Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDomainActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDomainRequest;
import org.openapis.openapi.models.operations.POSTDeleteDomainResponse;
import org.openapis.openapi.models.operations.POSTDeleteDomainVersionEnum;
import org.openapis.openapi.models.shared.DeleteDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDomainRequest req = new POSTDeleteDomainRequest(POSTDeleteDomainActionEnum.DELETE_DOMAIN, POSTDeleteDomainVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "sunt".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "pariatur";
                xAmzDate = "maxime";
                xAmzSecurityToken = "ea";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "odit";
            }};            

            POSTDeleteDomainResponse res = sdk.sdk.postDeleteDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteExpression

Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteExpressionActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteExpressionRequest;
import org.openapis.openapi.models.operations.POSTDeleteExpressionResponse;
import org.openapis.openapi.models.operations.POSTDeleteExpressionVersionEnum;
import org.openapis.openapi.models.shared.DeleteExpressionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteExpressionRequest req = new POSTDeleteExpressionRequest(POSTDeleteExpressionActionEnum.DELETE_EXPRESSION, POSTDeleteExpressionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "accusantium".getBytes();
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            POSTDeleteExpressionResponse res = sdk.sdk.postDeleteExpression(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteIndexField

Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteIndexFieldActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteIndexFieldRequest;
import org.openapis.openapi.models.operations.POSTDeleteIndexFieldResponse;
import org.openapis.openapi.models.operations.POSTDeleteIndexFieldVersionEnum;
import org.openapis.openapi.models.shared.DeleteIndexFieldRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteIndexFieldRequest req = new POSTDeleteIndexFieldRequest(POSTDeleteIndexFieldActionEnum.DELETE_INDEX_FIELD, POSTDeleteIndexFieldVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "pariatur".getBytes();
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "perferendis";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "amet";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "cumque";
            }};            

            POSTDeleteIndexFieldResponse res = sdk.sdk.postDeleteIndexField(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteSuggester

Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteSuggesterActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteSuggesterRequest;
import org.openapis.openapi.models.operations.POSTDeleteSuggesterResponse;
import org.openapis.openapi.models.operations.POSTDeleteSuggesterVersionEnum;
import org.openapis.openapi.models.shared.DeleteSuggesterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteSuggesterRequest req = new POSTDeleteSuggesterRequest(POSTDeleteSuggesterActionEnum.DELETE_SUGGESTER, POSTDeleteSuggesterVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "dolores";
                xAmzDate = "quis";
                xAmzSecurityToken = "totam";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "eaque";
            }};            

            POSTDeleteSuggesterResponse res = sdk.sdk.postDeleteSuggester(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAnalysisSchemes

Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAnalysisSchemesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAnalysisSchemesRequest;
import org.openapis.openapi.models.operations.POSTDescribeAnalysisSchemesResponse;
import org.openapis.openapi.models.operations.POSTDescribeAnalysisSchemesVersionEnum;
import org.openapis.openapi.models.shared.DescribeAnalysisSchemesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAnalysisSchemesRequest req = new POSTDescribeAnalysisSchemesRequest(POSTDescribeAnalysisSchemesActionEnum.DESCRIBE_ANALYSIS_SCHEMES, POSTDescribeAnalysisSchemesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "nesciunt".getBytes();
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "dolores";
                xAmzDate = "minus";
                xAmzSecurityToken = "quam";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "vero";
            }};            

            POSTDescribeAnalysisSchemesResponse res = sdk.sdk.postDescribeAnalysisSchemes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAvailabilityOptions

Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAvailabilityOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAvailabilityOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeAvailabilityOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeAvailabilityOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeAvailabilityOptionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAvailabilityOptionsRequest req = new POSTDescribeAvailabilityOptionsRequest(POSTDescribeAvailabilityOptionsActionEnum.DESCRIBE_AVAILABILITY_OPTIONS, POSTDescribeAvailabilityOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "facilis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "consequuntur";
            }};            

            POSTDescribeAvailabilityOptionsResponse res = sdk.sdk.postDescribeAvailabilityOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDomainEndpointOptions

Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDomainEndpointOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDomainEndpointOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDomainEndpointOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDomainEndpointOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDomainEndpointOptionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDomainEndpointOptionsRequest req = new POSTDescribeDomainEndpointOptionsRequest(POSTDescribeDomainEndpointOptionsActionEnum.DESCRIBE_DOMAIN_ENDPOINT_OPTIONS, POSTDescribeDomainEndpointOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "error".getBytes();
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "rerum";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "modi";
            }};            

            POSTDescribeDomainEndpointOptionsResponse res = sdk.sdk.postDescribeDomainEndpointOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDomains

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDomainsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDomainsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDomainsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDomainsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDomainsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDomainsRequest req = new POSTDescribeDomainsRequest(POSTDescribeDomainsActionEnum.DESCRIBE_DOMAINS, POSTDescribeDomainsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "dolorum".getBytes();
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "provident";
                xAmzDate = "nobis";
                xAmzSecurityToken = "libero";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quaerat";
            }};            

            POSTDescribeDomainsResponse res = sdk.sdk.postDescribeDomains(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeExpressions

Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeExpressionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeExpressionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeExpressionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeExpressionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeExpressionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeExpressionsRequest req = new POSTDescribeExpressionsRequest(POSTDescribeExpressionsActionEnum.DESCRIBE_EXPRESSIONS, POSTDescribeExpressionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "aliquid".getBytes();
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            POSTDescribeExpressionsResponse res = sdk.sdk.postDescribeExpressions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeIndexFields

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeIndexFieldsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeIndexFieldsRequest;
import org.openapis.openapi.models.operations.POSTDescribeIndexFieldsResponse;
import org.openapis.openapi.models.operations.POSTDescribeIndexFieldsVersionEnum;
import org.openapis.openapi.models.shared.DescribeIndexFieldsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeIndexFieldsRequest req = new POSTDescribeIndexFieldsRequest(POSTDescribeIndexFieldsActionEnum.DESCRIBE_INDEX_FIELDS, POSTDescribeIndexFieldsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "amet";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            POSTDescribeIndexFieldsResponse res = sdk.sdk.postDescribeIndexFields(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeScalingParameters

Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeScalingParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeScalingParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeScalingParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeScalingParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeScalingParametersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeScalingParametersRequest req = new POSTDescribeScalingParametersRequest(POSTDescribeScalingParametersActionEnum.DESCRIBE_SCALING_PARAMETERS, POSTDescribeScalingParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "iure".getBytes();
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "accusamus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "natus";
            }};            

            POSTDescribeScalingParametersResponse res = sdk.sdk.postDescribeScalingParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeServiceAccessPolicies

Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeServiceAccessPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeServiceAccessPoliciesRequest;
import org.openapis.openapi.models.operations.POSTDescribeServiceAccessPoliciesResponse;
import org.openapis.openapi.models.operations.POSTDescribeServiceAccessPoliciesVersionEnum;
import org.openapis.openapi.models.shared.DescribeServiceAccessPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeServiceAccessPoliciesRequest req = new POSTDescribeServiceAccessPoliciesRequest(POSTDescribeServiceAccessPoliciesActionEnum.DESCRIBE_SERVICE_ACCESS_POLICIES, POSTDescribeServiceAccessPoliciesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "atque".getBytes();
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ab";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "voluptate";
            }};            

            POSTDescribeServiceAccessPoliciesResponse res = sdk.sdk.postDescribeServiceAccessPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeSuggesters

Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeSuggestersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeSuggestersRequest;
import org.openapis.openapi.models.operations.POSTDescribeSuggestersResponse;
import org.openapis.openapi.models.operations.POSTDescribeSuggestersVersionEnum;
import org.openapis.openapi.models.shared.DescribeSuggestersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeSuggestersRequest req = new POSTDescribeSuggestersRequest(POSTDescribeSuggestersActionEnum.DESCRIBE_SUGGESTERS, POSTDescribeSuggestersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "deleniti".getBytes();
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "voluptate";
            }};            

            POSTDescribeSuggestersResponse res = sdk.sdk.postDescribeSuggesters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIndexDocuments

Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTIndexDocumentsActionEnum;
import org.openapis.openapi.models.operations.POSTIndexDocumentsRequest;
import org.openapis.openapi.models.operations.POSTIndexDocumentsResponse;
import org.openapis.openapi.models.operations.POSTIndexDocumentsVersionEnum;
import org.openapis.openapi.models.shared.IndexDocumentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTIndexDocumentsRequest req = new POSTIndexDocumentsRequest(POSTIndexDocumentsActionEnum.INDEX_DOCUMENTS, POSTIndexDocumentsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "saepe".getBytes();
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "optio";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "ad";
            }};            

            POSTIndexDocumentsResponse res = sdk.sdk.postIndexDocuments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListDomainNames

Lists all search domains owned by an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListDomainNamesActionEnum;
import org.openapis.openapi.models.operations.POSTListDomainNamesRequest;
import org.openapis.openapi.models.operations.POSTListDomainNamesResponse;
import org.openapis.openapi.models.operations.POSTListDomainNamesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListDomainNamesRequest req = new POSTListDomainNamesRequest(POSTListDomainNamesActionEnum.LIST_DOMAIN_NAMES, POSTListDomainNamesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "provident";
                xAmzDate = "minima";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "similique";
            }};            

            POSTListDomainNamesResponse res = sdk.sdk.postListDomainNames(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateAvailabilityOptions

Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateAvailabilityOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateAvailabilityOptionsRequest;
import org.openapis.openapi.models.operations.POSTUpdateAvailabilityOptionsResponse;
import org.openapis.openapi.models.operations.POSTUpdateAvailabilityOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAvailabilityOptionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateAvailabilityOptionsRequest req = new POSTUpdateAvailabilityOptionsRequest(POSTUpdateAvailabilityOptionsActionEnum.UPDATE_AVAILABILITY_OPTIONS, POSTUpdateAvailabilityOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "at".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTUpdateAvailabilityOptionsResponse res = sdk.sdk.postUpdateAvailabilityOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateDomainEndpointOptions

Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateDomainEndpointOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateDomainEndpointOptionsRequest;
import org.openapis.openapi.models.operations.POSTUpdateDomainEndpointOptionsResponse;
import org.openapis.openapi.models.operations.POSTUpdateDomainEndpointOptionsVersionEnum;
import org.openapis.openapi.models.shared.DomainEndpointOptions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TLSSecurityPolicyEnum;
import org.openapis.openapi.models.shared.UpdateDomainEndpointOptionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateDomainEndpointOptionsRequest req = new POSTUpdateDomainEndpointOptionsRequest(POSTUpdateDomainEndpointOptionsActionEnum.UPDATE_DOMAIN_ENDPOINT_OPTIONS, POSTUpdateDomainEndpointOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "ipsum";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "tempore";
            }};            

            POSTUpdateDomainEndpointOptionsResponse res = sdk.sdk.postUpdateDomainEndpointOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateScalingParameters

Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateScalingParametersActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateScalingParametersRequest;
import org.openapis.openapi.models.operations.POSTUpdateScalingParametersResponse;
import org.openapis.openapi.models.operations.POSTUpdateScalingParametersVersionEnum;
import org.openapis.openapi.models.shared.PartitionInstanceTypeEnum;
import org.openapis.openapi.models.shared.ScalingParameters;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateScalingParametersRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateScalingParametersRequest req = new POSTUpdateScalingParametersRequest(POSTUpdateScalingParametersActionEnum.UPDATE_SCALING_PARAMETERS, POSTUpdateScalingParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "numquam".getBytes();
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "sapiente";
                xAmzDate = "totam";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "expedita";
            }};            

            POSTUpdateScalingParametersResponse res = sdk.sdk.postUpdateScalingParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateServiceAccessPolicies

Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateServiceAccessPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateServiceAccessPoliciesRequest;
import org.openapis.openapi.models.operations.POSTUpdateServiceAccessPoliciesResponse;
import org.openapis.openapi.models.operations.POSTUpdateServiceAccessPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServiceAccessPoliciesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateServiceAccessPoliciesRequest req = new POSTUpdateServiceAccessPoliciesRequest(POSTUpdateServiceAccessPoliciesActionEnum.UPDATE_SERVICE_ACCESS_POLICIES, POSTUpdateServiceAccessPoliciesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                requestBody = "sed".getBytes();
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "libero";
                xAmzCredential = "voluptas";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "quam";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "incidunt";
            }};            

            POSTUpdateServiceAccessPoliciesResponse res = sdk.sdk.postUpdateServiceAccessPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
