/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListBotVersionsRequestBody {
    /**
     * The maximum number of versions to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;

    public ListBotVersionsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * If the response to the &lt;code&gt;ListBotVersion&lt;/code&gt; operation contains more results than specified in the &lt;code&gt;maxResults&lt;/code&gt; parameter, a token is returned in the response. Use that token in the &lt;code&gt;nextToken&lt;/code&gt; parameter to return the next page of results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListBotVersionsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    /**
     * Specifies attributes for sorting a list of bot versions.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortBy")
    public ListBotVersionsRequestBodySortBy sortBy;

    public ListBotVersionsRequestBody withSortBy(ListBotVersionsRequestBodySortBy sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    
    public ListBotVersionsRequestBody(){}
}
