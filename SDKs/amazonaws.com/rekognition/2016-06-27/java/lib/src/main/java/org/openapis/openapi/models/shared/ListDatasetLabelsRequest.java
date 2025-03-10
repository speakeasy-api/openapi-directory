/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListDatasetLabelsRequest {
    @JsonProperty("DatasetArn")
    public String datasetArn;

    public ListDatasetLabelsRequest withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;

    public ListDatasetLabelsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public ListDatasetLabelsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListDatasetLabelsRequest(@JsonProperty("DatasetArn") String datasetArn) {
        this.datasetArn = datasetArn;
  }
}
