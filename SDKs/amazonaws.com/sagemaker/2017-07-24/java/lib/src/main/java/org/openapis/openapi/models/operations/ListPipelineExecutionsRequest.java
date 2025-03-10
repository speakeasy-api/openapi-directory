/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListPipelineExecutionsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.ListPipelineExecutionsRequest listPipelineExecutionsRequest;

    public ListPipelineExecutionsRequest withListPipelineExecutionsRequest(org.openapis.openapi.models.shared.ListPipelineExecutionsRequest listPipelineExecutionsRequest) {
        this.listPipelineExecutionsRequest = listPipelineExecutionsRequest;
        return this;
    }
    
    /**
     * Pagination limit
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;

    public ListPipelineExecutionsRequest withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * Pagination token
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;

    public ListPipelineExecutionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public ListPipelineExecutionsRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public ListPipelineExecutionsRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public ListPipelineExecutionsRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public ListPipelineExecutionsRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public ListPipelineExecutionsRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public ListPipelineExecutionsRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public ListPipelineExecutionsRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public ListPipelineExecutionsXAmzTargetEnum xAmzTarget;

    public ListPipelineExecutionsRequest withXAmzTarget(ListPipelineExecutionsXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public ListPipelineExecutionsRequest(@JsonProperty("ListPipelineExecutionsRequest") org.openapis.openapi.models.shared.ListPipelineExecutionsRequest listPipelineExecutionsRequest, @JsonProperty("X-Amz-Target") ListPipelineExecutionsXAmzTargetEnum xAmzTarget) {
        this.listPipelineExecutionsRequest = listPipelineExecutionsRequest;
        this.xAmzTarget = xAmzTarget;
  }
}
