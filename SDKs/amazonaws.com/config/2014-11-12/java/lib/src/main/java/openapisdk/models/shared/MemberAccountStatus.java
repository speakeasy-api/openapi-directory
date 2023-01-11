package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * MemberAccountStatus
 * Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.
**/
public class MemberAccountStatus {
    @JsonProperty("AccountId")
    public String accountId;
    public MemberAccountStatus withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public MemberAccountStatus withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public MemberAccountStatus withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public MemberAccountStatus withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public MemberAccountStatus withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonProperty("MemberAccountRuleStatus")
    public MemberAccountRuleStatusEnum memberAccountRuleStatus;
    public MemberAccountStatus withMemberAccountRuleStatus(MemberAccountRuleStatusEnum memberAccountRuleStatus) {
        this.memberAccountRuleStatus = memberAccountRuleStatus;
        return this;
    }
}