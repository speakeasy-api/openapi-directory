/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetTagValuesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.GetTagValuesInput getTagValuesInput;

    public GetTagValuesRequest withGetTagValuesInput(org.openapis.openapi.models.shared.GetTagValuesInput getTagValuesInput) {
        this.getTagValuesInput = getTagValuesInput;
        return this;
    }
    
    /**
     * Pagination token
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PaginationToken")
    public String paginationToken;

    public GetTagValuesRequest withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public GetTagValuesRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public GetTagValuesRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public GetTagValuesRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public GetTagValuesRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public GetTagValuesRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public GetTagValuesRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public GetTagValuesRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public GetTagValuesXAmzTargetEnum xAmzTarget;

    public GetTagValuesRequest withXAmzTarget(GetTagValuesXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
    
    public GetTagValuesRequest(@JsonProperty("GetTagValuesInput") org.openapis.openapi.models.shared.GetTagValuesInput getTagValuesInput, @JsonProperty("X-Amz-Target") GetTagValuesXAmzTargetEnum xAmzTarget) {
        this.getTagValuesInput = getTagValuesInput;
        this.xAmzTarget = xAmzTarget;
  }
}
