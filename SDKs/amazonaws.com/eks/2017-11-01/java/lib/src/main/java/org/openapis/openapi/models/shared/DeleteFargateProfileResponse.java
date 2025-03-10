/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteFargateProfileResponse - Success
 */
public class DeleteFargateProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fargateProfile")
    public FargateProfile fargateProfile;

    public DeleteFargateProfileResponse withFargateProfile(FargateProfile fargateProfile) {
        this.fargateProfile = fargateProfile;
        return this;
    }
    
    public DeleteFargateProfileResponse(){}
}
