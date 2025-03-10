/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class SuppliersGetOpeningBalanceListResponse {
    
    public String contentType;

    public SuppliersGetOpeningBalanceListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[] ownerOpeningBalanceDtos;

    public SuppliersGetOpeningBalanceListResponse withOwnerOpeningBalanceDtos(org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[] ownerOpeningBalanceDtos) {
        this.ownerOpeningBalanceDtos = ownerOpeningBalanceDtos;
        return this;
    }
    
    
    public Integer statusCode;

    public SuppliersGetOpeningBalanceListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public SuppliersGetOpeningBalanceListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public SuppliersGetOpeningBalanceListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
