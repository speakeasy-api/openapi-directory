package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransformEncryption
 * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p> <p>Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.</p>
**/
public class TransformEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MlUserDataEncryption")
    public MlUserDataEncryption mlUserDataEncryption;
    public TransformEncryption withMlUserDataEncryption(MlUserDataEncryption mlUserDataEncryption) {
        this.mlUserDataEncryption = mlUserDataEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskRunSecurityConfigurationName")
    public String taskRunSecurityConfigurationName;
    public TransformEncryption withTaskRunSecurityConfigurationName(String taskRunSecurityConfigurationName) {
        this.taskRunSecurityConfigurationName = taskRunSecurityConfigurationName;
        return this;
    }
}