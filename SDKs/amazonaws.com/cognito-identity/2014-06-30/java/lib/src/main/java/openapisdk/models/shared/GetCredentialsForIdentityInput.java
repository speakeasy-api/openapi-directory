package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCredentialsForIdentityInput
 * Input to the <code>GetCredentialsForIdentity</code> action.
**/
public class GetCredentialsForIdentityInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomRoleArn")
    public String customRoleArn;
    public GetCredentialsForIdentityInput withCustomRoleArn(String customRoleArn) {
        this.customRoleArn = customRoleArn;
        return this;
    }
    @JsonProperty("IdentityId")
    public String identityId;
    public GetCredentialsForIdentityInput withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Logins")
    public java.util.Map<String, String> logins;
    public GetCredentialsForIdentityInput withLogins(java.util.Map<String, String> logins) {
        this.logins = logins;
        return this;
    }
}