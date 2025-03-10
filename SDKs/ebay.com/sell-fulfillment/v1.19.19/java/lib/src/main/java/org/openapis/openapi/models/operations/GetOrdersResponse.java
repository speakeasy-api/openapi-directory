/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class GetOrdersResponse {
    
    public String contentType;
    public GetOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.OrderSearchPagedCollection orderSearchPagedCollection;
    public GetOrdersResponse withOrderSearchPagedCollection(org.openapis.openapi.models.shared.OrderSearchPagedCollection orderSearchPagedCollection) {
        this.orderSearchPagedCollection = orderSearchPagedCollection;
        return this;
    }
    
    
    public Integer statusCode;
    public GetOrdersResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public GetOrdersResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
