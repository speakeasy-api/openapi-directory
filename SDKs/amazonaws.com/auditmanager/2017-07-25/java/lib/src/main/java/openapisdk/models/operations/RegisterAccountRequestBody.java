package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterAccountRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegatedAdminAccount")
    public String delegatedAdminAccount;
    public RegisterAccountRequestBody withDelegatedAdminAccount(String delegatedAdminAccount) {
        this.delegatedAdminAccount = delegatedAdminAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKey")
    public String kmsKey;
    public RegisterAccountRequestBody withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
}