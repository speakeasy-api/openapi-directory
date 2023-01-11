package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsAccessKeys {
    @JsonProperty("accessKeyId")
    public String accessKeyId;
    public AwsAccessKeys withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationMode")
    public AwsAccessKeysAuthenticationModeEnum authenticationMode;
    public AwsAccessKeys withAuthenticationMode(AwsAccessKeysAuthenticationModeEnum authenticationMode) {
        this.authenticationMode = authenticationMode;
        return this;
    }
    @JsonProperty("secretAccessKey")
    public String secretAccessKey;
    public AwsAccessKeys withSecretAccessKey(String secretAccessKey) {
        this.secretAccessKey = secretAccessKey;
        return this;
    }
}