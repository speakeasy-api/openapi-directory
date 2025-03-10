/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeTrustsRequest - Describes the trust relationships for a particular Managed Microsoft AD directory. If no input parameters are provided, such as directory ID or trust ID, this request describes all the trust relationships.
 */
public class DescribeTrustsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;

    public DescribeTrustsRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;

    public DescribeTrustsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public DescribeTrustsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustIds")
    public String[] trustIds;

    public DescribeTrustsRequest withTrustIds(String[] trustIds) {
        this.trustIds = trustIds;
        return this;
    }
    
    public DescribeTrustsRequest(){}
}
