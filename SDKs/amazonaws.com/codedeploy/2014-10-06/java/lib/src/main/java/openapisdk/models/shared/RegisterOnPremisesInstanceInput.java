package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterOnPremisesInstanceInput
 * Represents the input of the register on-premises instance operation.
**/
public class RegisterOnPremisesInstanceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamSessionArn")
    public String iamSessionArn;
    public RegisterOnPremisesInstanceInput withIamSessionArn(String iamSessionArn) {
        this.iamSessionArn = iamSessionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamUserArn")
    public String iamUserArn;
    public RegisterOnPremisesInstanceInput withIamUserArn(String iamUserArn) {
        this.iamUserArn = iamUserArn;
        return this;
    }
    @JsonProperty("instanceName")
    public String instanceName;
    public RegisterOnPremisesInstanceInput withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}