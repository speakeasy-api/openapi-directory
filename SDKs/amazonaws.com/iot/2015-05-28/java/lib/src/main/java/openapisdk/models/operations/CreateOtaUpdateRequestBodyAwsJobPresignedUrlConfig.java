package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig
 * Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
**/
public class CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresInSec")
    public Long expiresInSec;
    public CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig withExpiresInSec(Long expiresInSec) {
        this.expiresInSec = expiresInSec;
        return this;
    }
}