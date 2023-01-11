package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatusDetailFilters
 * Status filter object to filter results based on specific member account ID or status type for an organization config rule. 
**/
public class StatusDetailFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public StatusDetailFilters withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemberAccountRuleStatus")
    public MemberAccountRuleStatusEnum memberAccountRuleStatus;
    public StatusDetailFilters withMemberAccountRuleStatus(MemberAccountRuleStatusEnum memberAccountRuleStatus) {
        this.memberAccountRuleStatus = memberAccountRuleStatus;
        return this;
    }
}