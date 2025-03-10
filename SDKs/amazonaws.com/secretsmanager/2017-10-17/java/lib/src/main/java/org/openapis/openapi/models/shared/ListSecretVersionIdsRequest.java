/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListSecretVersionIdsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeDeprecated")
    public Boolean includeDeprecated;

    public ListSecretVersionIdsRequest withIncludeDeprecated(Boolean includeDeprecated) {
        this.includeDeprecated = includeDeprecated;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;

    public ListSecretVersionIdsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public ListSecretVersionIdsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonProperty("SecretId")
    public String secretId;

    public ListSecretVersionIdsRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
    
    public ListSecretVersionIdsRequest(@JsonProperty("SecretId") String secretId) {
        this.secretId = secretId;
  }
}
