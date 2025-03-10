/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesResponse {
    
    public String contentType;

    public GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
