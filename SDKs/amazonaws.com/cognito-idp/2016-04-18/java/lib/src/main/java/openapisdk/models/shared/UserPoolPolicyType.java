package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserPoolPolicyType
 * The policy associated with a user pool.
**/
public class UserPoolPolicyType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PasswordPolicy")
    public PasswordPolicyType passwordPolicy;
    public UserPoolPolicyType withPasswordPolicy(PasswordPolicyType passwordPolicy) {
        this.passwordPolicy = passwordPolicy;
        return this;
    }
}