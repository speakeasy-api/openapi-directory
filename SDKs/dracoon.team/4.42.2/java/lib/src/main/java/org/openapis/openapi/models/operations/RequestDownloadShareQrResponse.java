/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class RequestDownloadShareQrResponse {
    
    public String contentType;
    public RequestDownloadShareQrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.DownloadShare downloadShare;
    public RequestDownloadShareQrResponse withDownloadShare(org.openapis.openapi.models.shared.DownloadShare downloadShare) {
        this.downloadShare = downloadShare;
        return this;
    }
    
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.ErrorResponse errorResponse;
    public RequestDownloadShareQrResponse withErrorResponse(org.openapis.openapi.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    
    
    public Integer statusCode;
    public RequestDownloadShareQrResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public RequestDownloadShareQrResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}
