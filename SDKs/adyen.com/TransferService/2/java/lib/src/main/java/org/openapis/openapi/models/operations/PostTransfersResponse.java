/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostTransfersResponse {
    
    public String contentType;

    public PostTransfersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public PostTransfersResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostTransfersResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Unauthorized - authentication required.
     */
    
    public org.openapis.openapi.models.shared.RestServiceError restServiceError;

    public PostTransfersResponse withRestServiceError(org.openapis.openapi.models.shared.RestServiceError restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    
    /**
     * OK - the request has succeeded.
     */
    
    public org.openapis.openapi.models.shared.Transfer transfer;

    public PostTransfersResponse withTransfer(org.openapis.openapi.models.shared.Transfer transfer) {
        this.transfer = transfer;
        return this;
    }
    
    public PostTransfersResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
