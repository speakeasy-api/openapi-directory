/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ShareStoreResponse {
    /**
     * Only the owner of the store can make this operation or user not found
     */
    
    public org.openapis.openapi.models.shared.BeezUPCommonErrorResponseMessage beezUPCommonErrorResponseMessage;

    public ShareStoreResponse withBeezUPCommonErrorResponseMessage(org.openapis.openapi.models.shared.BeezUPCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    
    
    public String contentType;

    public ShareStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ShareStoreResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ShareStoreResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Free offer is not allowed to share store.
     */
    
    public org.openapis.openapi.models.shared.ErrorResponseMessagePaymentRequired errorResponseMessagePaymentRequired;

    public ShareStoreResponse withErrorResponseMessagePaymentRequired(org.openapis.openapi.models.shared.ErrorResponseMessagePaymentRequired errorResponseMessagePaymentRequired) {
        this.errorResponseMessagePaymentRequired = errorResponseMessagePaymentRequired;
        return this;
    }
    
    public ShareStoreResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
