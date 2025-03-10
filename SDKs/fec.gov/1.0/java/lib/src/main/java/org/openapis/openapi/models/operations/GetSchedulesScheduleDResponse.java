/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetSchedulesScheduleDResponse {
    
    public String contentType;

    public GetSchedulesScheduleDResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetSchedulesScheduleDResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetSchedulesScheduleDResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    
    public GetSchedulesScheduleDDefaultApplicationJSON getSchedulesScheduleDDefaultApplicationJSONObject;

    public GetSchedulesScheduleDResponse withGetSchedulesScheduleDDefaultApplicationJSONObject(GetSchedulesScheduleDDefaultApplicationJSON getSchedulesScheduleDDefaultApplicationJSONObject) {
        this.getSchedulesScheduleDDefaultApplicationJSONObject = getSchedulesScheduleDDefaultApplicationJSONObject;
        return this;
    }
    
    public GetSchedulesScheduleDResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
