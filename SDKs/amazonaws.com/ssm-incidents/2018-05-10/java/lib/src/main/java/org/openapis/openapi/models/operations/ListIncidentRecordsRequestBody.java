/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListIncidentRecordsRequestBody {
    /**
     * &lt;p&gt;Filters the list of incident records you want to search through. You can filter on the following keys:&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;creationTime&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;impact&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;status&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;createdBy&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Note the following when when you use Filters:&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt;If you don't specify a Filter, the response includes all incident records.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;If you specify more than one filter in a single request, the response returns incident records that match all filters.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;If you specify a filter with more than one value, the response returns incident records that match any of the values provided.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public org.openapis.openapi.models.shared.Filter[] filters;

    public ListIncidentRecordsRequestBody withFilters(org.openapis.openapi.models.shared.Filter[] filters) {
        this.filters = filters;
        return this;
    }
    
    /**
     * The maximum number of results per page.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;

    public ListIncidentRecordsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * The pagination token to continue to the next page of results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListIncidentRecordsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListIncidentRecordsRequestBody(){}
}
