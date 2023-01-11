package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RotateSecretRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public RotateSecretRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RotationLambdaARN")
    public String rotationLambdaARN;
    public RotateSecretRequest withRotationLambdaArn(String rotationLambdaARN) {
        this.rotationLambdaARN = rotationLambdaARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RotationRules")
    public RotationRulesType rotationRules;
    public RotateSecretRequest withRotationRules(RotationRulesType rotationRules) {
        this.rotationRules = rotationRules;
        return this;
    }
    @JsonProperty("SecretId")
    public String secretId;
    public RotateSecretRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}