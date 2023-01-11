package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartPolicyGenerationRequestBodyPolicyGenerationDetails
 * Contains the ARN details about the IAM entity for which the policy is generated.
**/
public class StartPolicyGenerationRequestBodyPolicyGenerationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalArn")
    public String principalArn;
    public StartPolicyGenerationRequestBodyPolicyGenerationDetails withPrincipalArn(String principalArn) {
        this.principalArn = principalArn;
        return this;
    }
}