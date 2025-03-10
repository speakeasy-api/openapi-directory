/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateEnvironmentResponse - Success
 */
public class UpdateEnvironmentResponse {
    @JsonProperty("environmentId")
    public String environmentId;

    public UpdateEnvironmentResponse withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    
    public UpdateEnvironmentResponse(@JsonProperty("environmentId") String environmentId) {
        this.environmentId = environmentId;
  }
}
