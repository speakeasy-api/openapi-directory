package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MemberAccount
 * Contains information about the Amazon Macie Classic member account.
**/
public class MemberAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public MemberAccount withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}