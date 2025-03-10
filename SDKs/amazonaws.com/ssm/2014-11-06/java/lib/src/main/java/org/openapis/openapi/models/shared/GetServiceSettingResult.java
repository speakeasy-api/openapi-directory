/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServiceSettingResult - The query result body of the GetServiceSetting API operation.
 */
public class GetServiceSettingResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceSetting")
    public ServiceSetting serviceSetting;

    public GetServiceSettingResult withServiceSetting(ServiceSetting serviceSetting) {
        this.serviceSetting = serviceSetting;
        return this;
    }
    
    public GetServiceSettingResult(){}
}
