package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSecretsManagerSecretDetails
 * Details about an Secrets Manager secret.
**/
public class AwsSecretsManagerSecretDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deleted")
    public Boolean deleted;
    public AwsSecretsManagerSecretDetails withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public AwsSecretsManagerSecretDetails withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public AwsSecretsManagerSecretDetails withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsSecretsManagerSecretDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RotationEnabled")
    public Boolean rotationEnabled;
    public AwsSecretsManagerSecretDetails withRotationEnabled(Boolean rotationEnabled) {
        this.rotationEnabled = rotationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RotationLambdaArn")
    public String rotationLambdaArn;
    public AwsSecretsManagerSecretDetails withRotationLambdaArn(String rotationLambdaArn) {
        this.rotationLambdaArn = rotationLambdaArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RotationOccurredWithinFrequency")
    public Boolean rotationOccurredWithinFrequency;
    public AwsSecretsManagerSecretDetails withRotationOccurredWithinFrequency(Boolean rotationOccurredWithinFrequency) {
        this.rotationOccurredWithinFrequency = rotationOccurredWithinFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RotationRules")
    public AwsSecretsManagerSecretRotationRules rotationRules;
    public AwsSecretsManagerSecretDetails withRotationRules(AwsSecretsManagerSecretRotationRules rotationRules) {
        this.rotationRules = rotationRules;
        return this;
    }
}