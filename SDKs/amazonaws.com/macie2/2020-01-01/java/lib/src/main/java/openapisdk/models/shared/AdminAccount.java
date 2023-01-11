package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminAccount
 * Provides information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.
**/
public class AdminAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public AdminAccount withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AdminStatusEnum status;
    public AdminAccount withStatus(AdminStatusEnum status) {
        this.status = status;
        return this;
    }
}