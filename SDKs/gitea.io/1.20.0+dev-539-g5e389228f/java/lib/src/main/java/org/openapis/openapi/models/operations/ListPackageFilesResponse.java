/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ListPackageFilesResponse {
    
    public byte[] body;

    public ListPackageFilesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public ListPackageFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * PackageFileList
     */
    
    public org.openapis.openapi.models.shared.PackageFile[] packageFiles;

    public ListPackageFilesResponse withPackageFiles(org.openapis.openapi.models.shared.PackageFile[] packageFiles) {
        this.packageFiles = packageFiles;
        return this;
    }
    
    
    public Integer statusCode;

    public ListPackageFilesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ListPackageFilesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ListPackageFilesResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
