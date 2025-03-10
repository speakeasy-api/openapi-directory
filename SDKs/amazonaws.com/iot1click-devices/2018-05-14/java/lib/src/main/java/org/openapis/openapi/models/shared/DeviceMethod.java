/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceType")
    public String deviceType;

    public DeviceMethod withDeviceType(String deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MethodName")
    public String methodName;

    public DeviceMethod withMethodName(String methodName) {
        this.methodName = methodName;
        return this;
    }
    
    public DeviceMethod(){}
}
