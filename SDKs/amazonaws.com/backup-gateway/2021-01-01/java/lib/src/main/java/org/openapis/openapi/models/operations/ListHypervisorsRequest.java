/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListHypervisorsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.ListHypervisorsInput listHypervisorsInput;

    public ListHypervisorsRequest withListHypervisorsInput(org.openapis.openapi.models.shared.ListHypervisorsInput listHypervisorsInput) {
        this.listHypervisorsInput = listHypervisorsInput;
        return this;
    }
    
    /**
     * Pagination limit
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;

    public ListHypervisorsRequest withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * Pagination token
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;

    public ListHypervisorsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public ListHypervisorsRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public ListHypervisorsRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public ListHypervisorsRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public ListHypervisorsRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public ListHypervisorsRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public ListHypervisorsRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public ListHypervisorsRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public ListHypervisorsXAmzTargetEnum xAmzTarget;

    public ListHypervisorsRequest withXAmzTarget(ListHypervisorsXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public ListHypervisorsRequest(@JsonProperty("ListHypervisorsInput") org.openapis.openapi.models.shared.ListHypervisorsInput listHypervisorsInput, @JsonProperty("X-Amz-Target") ListHypervisorsXAmzTargetEnum xAmzTarget) {
        this.listHypervisorsInput = listHypervisorsInput;
        this.xAmzTarget = xAmzTarget;
  }
}
