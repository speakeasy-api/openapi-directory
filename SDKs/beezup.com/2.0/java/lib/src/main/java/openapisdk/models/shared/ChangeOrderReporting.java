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
 * ChangeOrderReporting
 * The reporting related to a change order operation
**/
public class ChangeOrderReporting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeOrderType")
    public String changeOrderType;
    public ChangeOrderReporting withChangeOrderType(String changeOrderType) {
        this.changeOrderType = changeOrderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationUtcDate")
    public OffsetDateTime creationUtcDate;
    public ChangeOrderReporting withCreationUtcDate(OffsetDateTime creationUtcDate) {
        this.creationUtcDate = creationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public java.util.Map<String, java.util.Map<String, Object>> details;
    public ChangeOrderReporting withDetails(java.util.Map<String, java.util.Map<String, Object>> details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public ChangeOrderReporting withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionUUID")
    public String executionUUID;
    public ChangeOrderReporting withExecutionUuid(String executionUUID) {
        this.executionUUID = executionUUID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public ChangeOrderReporting withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateUtcDate")
    public OffsetDateTime lastUpdateUtcDate;
    public ChangeOrderReporting withLastUpdateUtcDate(OffsetDateTime lastUpdateUtcDate) {
        this.lastUpdateUtcDate = lastUpdateUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingStatus")
    public String processingStatus;
    public ChangeOrderReporting withProcessingStatus(String processingStatus) {
        this.processingStatus = processingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceType")
    public SourceTypeEnum sourceType;
    public ChangeOrderReporting withSourceType(SourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUserId")
    public String sourceUserId;
    public ChangeOrderReporting withSourceUserId(String sourceUserId) {
        this.sourceUserId = sourceUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUserName")
    public String sourceUserName;
    public ChangeOrderReporting withSourceUserName(String sourceUserName) {
        this.sourceUserName = sourceUserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testMode")
    public Boolean testMode;
    public ChangeOrderReporting withTestMode(Boolean testMode) {
        this.testMode = testMode;
        return this;
    }
}