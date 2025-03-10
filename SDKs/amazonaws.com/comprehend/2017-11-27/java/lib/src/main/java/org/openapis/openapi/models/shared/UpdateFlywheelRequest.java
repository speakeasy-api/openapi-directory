/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateFlywheelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActiveModelArn")
    public String activeModelArn;

    public UpdateFlywheelRequest withActiveModelArn(String activeModelArn) {
        this.activeModelArn = activeModelArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;

    public UpdateFlywheelRequest withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSecurityConfig")
    public UpdateDataSecurityConfig dataSecurityConfig;

    public UpdateFlywheelRequest withDataSecurityConfig(UpdateDataSecurityConfig dataSecurityConfig) {
        this.dataSecurityConfig = dataSecurityConfig;
        return this;
    }
    
    @JsonProperty("FlywheelArn")
    public String flywheelArn;

    public UpdateFlywheelRequest withFlywheelArn(String flywheelArn) {
        this.flywheelArn = flywheelArn;
        return this;
    }
    
    public UpdateFlywheelRequest(@JsonProperty("FlywheelArn") String flywheelArn) {
        this.flywheelArn = flywheelArn;
  }
}
