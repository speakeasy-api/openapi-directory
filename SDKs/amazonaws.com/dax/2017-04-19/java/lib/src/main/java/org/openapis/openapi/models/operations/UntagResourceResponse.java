/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UntagResourceResponse {
    /**
     * ClusterNotFoundFault
     */
    
    public Object clusterNotFoundFault;

    public UntagResourceResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    
    
    public String contentType;

    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * InvalidARNFault
     */
    
    public Object invalidARNFault;

    public UntagResourceResponse withInvalidARNFault(Object invalidARNFault) {
        this.invalidARNFault = invalidARNFault;
        return this;
    }
    
    /**
     * InvalidClusterStateFault
     */
    
    public Object invalidClusterStateFault;

    public UntagResourceResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    
    /**
     * InvalidParameterCombinationException
     */
    
    public Object invalidParameterCombinationException;

    public UntagResourceResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    
    /**
     * InvalidParameterValueException
     */
    
    public Object invalidParameterValueException;

    public UntagResourceResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    
    public Object serviceLinkedRoleNotFoundFault;

    public UntagResourceResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    
    
    public Integer statusCode;

    public UntagResourceResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UntagResourceResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * TagNotFoundFault
     */
    
    public Object tagNotFoundFault;

    public UntagResourceResponse withTagNotFoundFault(Object tagNotFoundFault) {
        this.tagNotFoundFault = tagNotFoundFault;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.UntagResourceResponse untagResourceResponse;

    public UntagResourceResponse withUntagResourceResponse(org.openapis.openapi.models.shared.UntagResourceResponse untagResourceResponse) {
        this.untagResourceResponse = untagResourceResponse;
        return this;
    }
    
    public UntagResourceResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
