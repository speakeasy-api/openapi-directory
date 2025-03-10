/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RollbackApplicationResponse - Success
 */
public class RollbackApplicationResponse {
    /**
     * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
     */
    @JsonProperty("ApplicationDetail")
    public ApplicationDetail applicationDetail;

    public RollbackApplicationResponse withApplicationDetail(ApplicationDetail applicationDetail) {
        this.applicationDetail = applicationDetail;
        return this;
    }
    
    public RollbackApplicationResponse(@JsonProperty("ApplicationDetail") ApplicationDetail applicationDetail) {
        this.applicationDetail = applicationDetail;
  }
}
