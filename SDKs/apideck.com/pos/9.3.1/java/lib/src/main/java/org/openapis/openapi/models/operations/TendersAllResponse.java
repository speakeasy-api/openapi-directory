/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class TendersAllResponse {
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.BadRequestResponse badRequestResponse;

    public TendersAllResponse withBadRequestResponse(org.openapis.openapi.models.shared.BadRequestResponse badRequestResponse) {
        this.badRequestResponse = badRequestResponse;
        return this;
    }
    
    
    public String contentType;

    public TendersAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Tenders
     */
    
    public org.openapis.openapi.models.shared.GetTendersResponse getTendersResponse;

    public TendersAllResponse withGetTendersResponse(org.openapis.openapi.models.shared.GetTendersResponse getTendersResponse) {
        this.getTendersResponse = getTendersResponse;
        return this;
    }
    
    /**
     * The specified resource was not found
     */
    
    public org.openapis.openapi.models.shared.NotFoundResponse notFoundResponse;

    public TendersAllResponse withNotFoundResponse(org.openapis.openapi.models.shared.NotFoundResponse notFoundResponse) {
        this.notFoundResponse = notFoundResponse;
        return this;
    }
    
    /**
     * Payment Required
     */
    
    public org.openapis.openapi.models.shared.PaymentRequiredResponse paymentRequiredResponse;

    public TendersAllResponse withPaymentRequiredResponse(org.openapis.openapi.models.shared.PaymentRequiredResponse paymentRequiredResponse) {
        this.paymentRequiredResponse = paymentRequiredResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public TendersAllResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public TendersAllResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Unauthorized
     */
    
    public org.openapis.openapi.models.shared.UnauthorizedResponse unauthorizedResponse;

    public TendersAllResponse withUnauthorizedResponse(org.openapis.openapi.models.shared.UnauthorizedResponse unauthorizedResponse) {
        this.unauthorizedResponse = unauthorizedResponse;
        return this;
    }
    
    /**
     * Unexpected error
     */
    
    public org.openapis.openapi.models.shared.UnexpectedErrorResponse unexpectedErrorResponse;

    public TendersAllResponse withUnexpectedErrorResponse(org.openapis.openapi.models.shared.UnexpectedErrorResponse unexpectedErrorResponse) {
        this.unexpectedErrorResponse = unexpectedErrorResponse;
        return this;
    }
    
    /**
     * Unprocessable
     */
    
    public org.openapis.openapi.models.shared.UnprocessableResponse unprocessableResponse;

    public TendersAllResponse withUnprocessableResponse(org.openapis.openapi.models.shared.UnprocessableResponse unprocessableResponse) {
        this.unprocessableResponse = unprocessableResponse;
        return this;
    }
    
    public TendersAllResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
