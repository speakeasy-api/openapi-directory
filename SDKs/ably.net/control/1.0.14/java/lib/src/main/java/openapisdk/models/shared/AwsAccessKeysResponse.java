package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsAccessKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKeyId")
    public String accessKeyId;
    public AwsAccessKeysResponse withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationMode")
    public AwsAccessKeysResponseAuthenticationModeEnum authenticationMode;
    public AwsAccessKeysResponse withAuthenticationMode(AwsAccessKeysResponseAuthenticationModeEnum authenticationMode) {
        this.authenticationMode = authenticationMode;
        return this;
    }
}