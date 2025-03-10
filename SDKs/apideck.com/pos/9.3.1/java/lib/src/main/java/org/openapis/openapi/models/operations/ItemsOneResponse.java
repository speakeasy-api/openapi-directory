/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ItemsOneResponse {
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.BadRequestResponse badRequestResponse;

    public ItemsOneResponse withBadRequestResponse(org.openapis.openapi.models.shared.BadRequestResponse badRequestResponse) {
        this.badRequestResponse = badRequestResponse;
        return this;
    }
    
    
    public String contentType;

    public ItemsOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Items
     */
    
    public org.openapis.openapi.models.shared.GetItemResponse getItemResponse;

    public ItemsOneResponse withGetItemResponse(org.openapis.openapi.models.shared.GetItemResponse getItemResponse) {
        this.getItemResponse = getItemResponse;
        return this;
    }
    
    /**
     * The specified resource was not found
     */
    
    public org.openapis.openapi.models.shared.NotFoundResponse notFoundResponse;

    public ItemsOneResponse withNotFoundResponse(org.openapis.openapi.models.shared.NotFoundResponse notFoundResponse) {
        this.notFoundResponse = notFoundResponse;
        return this;
    }
    
    /**
     * Payment Required
     */
    
    public org.openapis.openapi.models.shared.PaymentRequiredResponse paymentRequiredResponse;

    public ItemsOneResponse withPaymentRequiredResponse(org.openapis.openapi.models.shared.PaymentRequiredResponse paymentRequiredResponse) {
        this.paymentRequiredResponse = paymentRequiredResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public ItemsOneResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ItemsOneResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Unauthorized
     */
    
    public org.openapis.openapi.models.shared.UnauthorizedResponse unauthorizedResponse;

    public ItemsOneResponse withUnauthorizedResponse(org.openapis.openapi.models.shared.UnauthorizedResponse unauthorizedResponse) {
        this.unauthorizedResponse = unauthorizedResponse;
        return this;
    }
    
    /**
     * Unexpected error
     */
    
    public org.openapis.openapi.models.shared.UnexpectedErrorResponse unexpectedErrorResponse;

    public ItemsOneResponse withUnexpectedErrorResponse(org.openapis.openapi.models.shared.UnexpectedErrorResponse unexpectedErrorResponse) {
        this.unexpectedErrorResponse = unexpectedErrorResponse;
        return this;
    }
    
    /**
     * Unprocessable
     */
    
    public org.openapis.openapi.models.shared.UnprocessableResponse unprocessableResponse;

    public ItemsOneResponse withUnprocessableResponse(org.openapis.openapi.models.shared.UnprocessableResponse unprocessableResponse) {
        this.unprocessableResponse = unprocessableResponse;
        return this;
    }
    
    public ItemsOneResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
