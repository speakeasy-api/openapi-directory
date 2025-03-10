/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class CreateDownloadShareResponse {
    
    public String contentType;
    public CreateDownloadShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Created
     */
    
    public org.openapis.openapi.models.shared.DownloadShare downloadShare;
    public CreateDownloadShareResponse withDownloadShare(org.openapis.openapi.models.shared.DownloadShare downloadShare) {
        this.downloadShare = downloadShare;
        return this;
    }
    
    /**
     * Unauthorized
     */
    
    public org.openapis.openapi.models.shared.ErrorResponse errorResponse;
    public CreateDownloadShareResponse withErrorResponse(org.openapis.openapi.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    
    
    public Integer statusCode;
    public CreateDownloadShareResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public CreateDownloadShareResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Bad Request
     */
    
    public Object createDownloadShare400ApplicationJSONOneOf;
    public CreateDownloadShareResponse withCreateDownloadShare400ApplicationJSONOneOf(Object createDownloadShare400ApplicationJSONOneOf) {
        this.createDownloadShare400ApplicationJSONOneOf = createDownloadShare400ApplicationJSONOneOf;
        return this;
    }
    
}
