/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DevicesGetReleaseUpdateDevicesStatus200ApplicationJSON - The status of the resign operation.
 */
public class DevicesGetReleaseUpdateDevicesStatus200ApplicationJSON {
    /**
     * Error code for any error that occured during the resigning operation.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public String errorCode;

    public DevicesGetReleaseUpdateDevicesStatus200ApplicationJSON withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    
    /**
     * Error message for any error that occured during the resigning operation.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_message")
    public String errorMessage;

    public DevicesGetReleaseUpdateDevicesStatus200ApplicationJSON withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    
    /**
     * The status of the resign
     */
    @JsonProperty("status")
    public String status;

    public DevicesGetReleaseUpdateDevicesStatus200ApplicationJSON withStatus(String status) {
        this.status = status;
        return this;
    }
    
    public DevicesGetReleaseUpdateDevicesStatus200ApplicationJSON(@JsonProperty("status") String status) {
        this.status = status;
  }
}
