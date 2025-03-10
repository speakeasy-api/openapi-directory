/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListRobotsRequestBody {
    /**
     * &lt;p&gt;Optional filters to limit results.&lt;/p&gt; &lt;p&gt;The filter names &lt;code&gt;status&lt;/code&gt; and &lt;code&gt;fleetName&lt;/code&gt; are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status &lt;code&gt;Registered&lt;/code&gt; or the status &lt;code&gt;Available&lt;/code&gt;.&lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public org.openapis.openapi.models.shared.Filter[] filters;

    public ListRobotsRequestBody withFilters(org.openapis.openapi.models.shared.Filter[] filters) {
        this.filters = filters;
        return this;
    }
    
    /**
     * When this parameter is used, &lt;code&gt;ListRobots&lt;/code&gt; only returns &lt;code&gt;maxResults&lt;/code&gt; results in a single page along with a &lt;code&gt;nextToken&lt;/code&gt; response element. The remaining results of the initial request can be seen by sending another &lt;code&gt;ListRobots&lt;/code&gt; request with the returned &lt;code&gt;nextToken&lt;/code&gt; value. This value can be between 1 and 200. If this parameter is not used, then &lt;code&gt;ListRobots&lt;/code&gt; returns up to 200 results and a &lt;code&gt;nextToken&lt;/code&gt; value if applicable. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;

    public ListRobotsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * If the previous paginated request did not return all of the remaining results, the response object's &lt;code&gt;nextToken&lt;/code&gt; parameter value is set to a token. To retrieve the next set of results, call &lt;code&gt;ListRobots&lt;/code&gt; again and assign that token to the request object's &lt;code&gt;nextToken&lt;/code&gt; parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListRobotsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListRobotsRequestBody(){}
}
