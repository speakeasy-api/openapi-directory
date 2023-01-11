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
 * OrganizationConformancePackDetailedStatus
 * Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed. 
**/
public class OrganizationConformancePackDetailedStatus {
    @JsonProperty("AccountId")
    public String accountId;
    public OrganizationConformancePackDetailedStatus withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("ConformancePackName")
    public String conformancePackName;
    public OrganizationConformancePackDetailedStatus withConformancePackName(String conformancePackName) {
        this.conformancePackName = conformancePackName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public OrganizationConformancePackDetailedStatus withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public OrganizationConformancePackDetailedStatus withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public OrganizationConformancePackDetailedStatus withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonProperty("Status")
    public OrganizationResourceDetailedStatusEnum status;
    public OrganizationConformancePackDetailedStatus withStatus(OrganizationResourceDetailedStatusEnum status) {
        this.status = status;
        return this;
    }
}