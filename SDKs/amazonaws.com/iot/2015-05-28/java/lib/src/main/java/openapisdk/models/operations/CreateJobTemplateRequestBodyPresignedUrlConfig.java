package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateJobTemplateRequestBodyPresignedUrlConfig
 * Configuration for pre-signed S3 URLs.
**/
public class CreateJobTemplateRequestBodyPresignedUrlConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresInSec")
    public Long expiresInSec;
    public CreateJobTemplateRequestBodyPresignedUrlConfig withExpiresInSec(Long expiresInSec) {
        this.expiresInSec = expiresInSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateJobTemplateRequestBodyPresignedUrlConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}