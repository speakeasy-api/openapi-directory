package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSecretRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public UpdateSecretRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateSecretRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public UpdateSecretRequest withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretBinary")
    public String secretBinary;
    public UpdateSecretRequest withSecretBinary(String secretBinary) {
        this.secretBinary = secretBinary;
        return this;
    }
    @JsonProperty("SecretId")
    public String secretId;
    public UpdateSecretRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretString")
    public String secretString;
    public UpdateSecretRequest withSecretString(String secretString) {
        this.secretString = secretString;
        return this;
    }
}