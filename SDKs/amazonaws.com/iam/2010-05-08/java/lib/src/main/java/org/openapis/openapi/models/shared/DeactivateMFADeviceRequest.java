/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeactivateMFADeviceRequest {
    
    public String serialNumber;

    public DeactivateMFADeviceRequest withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    
    
    public String userName;

    public DeactivateMFADeviceRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    
    public DeactivateMFADeviceRequest(@JsonProperty("SerialNumber") String serialNumber, @JsonProperty("UserName") String userName) {
        this.serialNumber = serialNumber;
        this.userName = userName;
  }
}
