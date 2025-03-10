/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CreateSettingResponse {
    
    public String contentType;

    public CreateSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * When the creation was successful.
     */
    
    public org.openapis.openapi.models.shared.SettingModel settingModel;

    public CreateSettingResponse withSettingModel(org.openapis.openapi.models.shared.SettingModel settingModel) {
        this.settingModel = settingModel;
        return this;
    }
    
    /**
     * When the creation was successful.
     */
    
    public org.openapis.openapi.models.shared.SettingModelHaljson settingModelHaljson;

    public CreateSettingResponse withSettingModelHaljson(org.openapis.openapi.models.shared.SettingModelHaljson settingModelHaljson) {
        this.settingModelHaljson = settingModelHaljson;
        return this;
    }
    
    
    public Integer statusCode;

    public CreateSettingResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CreateSettingResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CreateSettingResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
