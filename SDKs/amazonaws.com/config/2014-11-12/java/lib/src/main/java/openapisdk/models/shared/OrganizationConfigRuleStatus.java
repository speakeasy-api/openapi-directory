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
 * OrganizationConfigRuleStatus
 * Returns the status for an organization config rule in an organization.
**/
public class OrganizationConfigRuleStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public OrganizationConfigRuleStatus withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public OrganizationConfigRuleStatus withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public OrganizationConfigRuleStatus withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonProperty("OrganizationConfigRuleName")
    public String organizationConfigRuleName;
    public OrganizationConfigRuleStatus withOrganizationConfigRuleName(String organizationConfigRuleName) {
        this.organizationConfigRuleName = organizationConfigRuleName;
        return this;
    }
    @JsonProperty("OrganizationRuleStatus")
    public OrganizationRuleStatusEnum organizationRuleStatus;
    public OrganizationConfigRuleStatus withOrganizationRuleStatus(OrganizationRuleStatusEnum organizationRuleStatus) {
        this.organizationRuleStatus = organizationRuleStatus;
        return this;
    }
}