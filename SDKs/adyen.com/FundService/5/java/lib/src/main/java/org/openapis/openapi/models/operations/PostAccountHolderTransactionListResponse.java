/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostAccountHolderTransactionListResponse {
    /**
     * OK - the request has succeeded.
     */
    
    public org.openapis.openapi.models.shared.AccountHolderTransactionListResponse accountHolderTransactionListResponse;

    public PostAccountHolderTransactionListResponse withAccountHolderTransactionListResponse(org.openapis.openapi.models.shared.AccountHolderTransactionListResponse accountHolderTransactionListResponse) {
        this.accountHolderTransactionListResponse = accountHolderTransactionListResponse;
        return this;
    }
    
    
    public String contentType;

    public PostAccountHolderTransactionListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    
    public org.openapis.openapi.models.shared.ServiceError serviceError;

    public PostAccountHolderTransactionListResponse withServiceError(org.openapis.openapi.models.shared.ServiceError serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    
    
    public Integer statusCode;

    public PostAccountHolderTransactionListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostAccountHolderTransactionListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PostAccountHolderTransactionListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
