package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PresignedUrlConfig
 * Configuration for pre-signed S3 URLs.
**/
public class PresignedUrlConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresInSec")
    public Long expiresInSec;
    public PresignedUrlConfig withExpiresInSec(Long expiresInSec) {
        this.expiresInSec = expiresInSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public PresignedUrlConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}