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
 * OrganizationConformancePackStatus
 * Returns the status for an organization conformance pack in an organization.
**/
public class OrganizationConformancePackStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public OrganizationConformancePackStatus withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public OrganizationConformancePackStatus withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public OrganizationConformancePackStatus withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonProperty("OrganizationConformancePackName")
    public String organizationConformancePackName;
    public OrganizationConformancePackStatus withOrganizationConformancePackName(String organizationConformancePackName) {
        this.organizationConformancePackName = organizationConformancePackName;
        return this;
    }
    @JsonProperty("Status")
    public OrganizationResourceStatusEnum status;
    public OrganizationConformancePackStatus withStatus(OrganizationResourceStatusEnum status) {
        this.status = status;
        return this;
    }
}