package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateJobRequestBodyPresignedUrlConfig
 * Configuration for pre-signed S3 URLs.
**/
public class CreateJobRequestBodyPresignedUrlConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresInSec")
    public Long expiresInSec;
    public CreateJobRequestBodyPresignedUrlConfig withExpiresInSec(Long expiresInSec) {
        this.expiresInSec = expiresInSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateJobRequestBodyPresignedUrlConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}