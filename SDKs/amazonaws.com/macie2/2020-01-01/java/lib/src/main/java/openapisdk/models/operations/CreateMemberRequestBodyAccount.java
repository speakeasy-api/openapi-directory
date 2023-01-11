package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateMemberRequestBodyAccount
 * Specifies the details of an account to associate with an Amazon Macie administrator account.
**/
public class CreateMemberRequestBodyAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public CreateMemberRequestBodyAccount withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CreateMemberRequestBodyAccount withEmail(String email) {
        this.email = email;
        return this;
    }
}