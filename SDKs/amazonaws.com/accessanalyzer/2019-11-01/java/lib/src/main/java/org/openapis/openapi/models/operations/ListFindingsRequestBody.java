/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListFindingsRequestBody {
    /**
     * The &lt;a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources"&gt;ARN of the analyzer&lt;/a&gt; to retrieve findings from.
     */
    @JsonProperty("analyzerArn")
    public String analyzerArn;

    public ListFindingsRequestBody withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    
    /**
     * A filter to match for the findings to return.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public java.util.Map<String, org.openapis.openapi.models.shared.Criterion> filter;

    public ListFindingsRequestBody withFilter(java.util.Map<String, org.openapis.openapi.models.shared.Criterion> filter) {
        this.filter = filter;
        return this;
    }
    
    /**
     * The maximum number of results to return in the response.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;

    public ListFindingsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * A token used for pagination of results returned.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListFindingsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    /**
     * The criteria used to sort.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public ListFindingsRequestBodySort sort;

    public ListFindingsRequestBody withSort(ListFindingsRequestBodySort sort) {
        this.sort = sort;
        return this;
    }
    
    public ListFindingsRequestBody(@JsonProperty("analyzerArn") String analyzerArn) {
        this.analyzerArn = analyzerArn;
  }
}
