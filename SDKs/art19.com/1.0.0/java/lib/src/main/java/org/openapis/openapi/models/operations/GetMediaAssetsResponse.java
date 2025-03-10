/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetMediaAssetsResponse {
    
    public String contentType;

    public GetMediaAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public GetMediaAssetsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public GetMediaAssetsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetMediaAssetsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Success
     */
    
    public GetMediaAssets200ApplicationVndApiPlusJson getMediaAssets200ApplicationVndApiPlusJsonObject;

    public GetMediaAssetsResponse withGetMediaAssets200ApplicationVndApiPlusJsonObject(GetMediaAssets200ApplicationVndApiPlusJson getMediaAssets200ApplicationVndApiPlusJsonObject) {
        this.getMediaAssets200ApplicationVndApiPlusJsonObject = getMediaAssets200ApplicationVndApiPlusJsonObject;
        return this;
    }
    
    /**
     * Bad Request
     * 
     * Parameters requiring a specific format must adhere to that format.
     * Pagination must have a positive page number and a page size no larger than 100. 
     * 
     */
    
    public GetMediaAssets400ApplicationVndApiPlusJson getMediaAssets400ApplicationVndApiPlusJsonObject;

    public GetMediaAssetsResponse withGetMediaAssets400ApplicationVndApiPlusJsonObject(GetMediaAssets400ApplicationVndApiPlusJson getMediaAssets400ApplicationVndApiPlusJsonObject) {
        this.getMediaAssets400ApplicationVndApiPlusJsonObject = getMediaAssets400ApplicationVndApiPlusJsonObject;
        return this;
    }
    
    public GetMediaAssetsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
