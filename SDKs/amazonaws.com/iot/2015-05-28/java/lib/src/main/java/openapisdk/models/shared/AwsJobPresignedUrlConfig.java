package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsJobPresignedUrlConfig
 * Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
**/
public class AwsJobPresignedUrlConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresInSec")
    public Long expiresInSec;
    public AwsJobPresignedUrlConfig withExpiresInSec(Long expiresInSec) {
        this.expiresInSec = expiresInSec;
        return this;
    }
}