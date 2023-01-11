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
 * HarvestOrderReporting
 * The reporting related to a harvest order operation
**/
public class HarvestOrderReporting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPForcedStatus")
    public String beezUPForcedStatus;
    public HarvestOrderReporting withBeezUpForcedStatus(String beezUPForcedStatus) {
        this.beezUPForcedStatus = beezUPForcedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPStatus")
    public String beezUPStatus;
    public HarvestOrderReporting withBeezUpStatus(String beezUPStatus) {
        this.beezUPStatus = beezUPStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationUtcDate")
    public OffsetDateTime creationUtcDate;
    public HarvestOrderReporting withCreationUtcDate(OffsetDateTime creationUtcDate) {
        this.creationUtcDate = creationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public HarvestOrderReporting withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionUUID")
    public String executionUUID;
    public HarvestOrderReporting withExecutionUuid(String executionUUID) {
        this.executionUUID = executionUUID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateUtcDate")
    public OffsetDateTime lastUpdateUtcDate;
    public HarvestOrderReporting withLastUpdateUtcDate(OffsetDateTime lastUpdateUtcDate) {
        this.lastUpdateUtcDate = lastUpdateUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceStatus")
    public String marketplaceStatus;
    public HarvestOrderReporting withMarketplaceStatus(String marketplaceStatus) {
        this.marketplaceStatus = marketplaceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingStatus")
    public String processingStatus;
    public HarvestOrderReporting withProcessingStatus(String processingStatus) {
        this.processingStatus = processingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningMessage")
    public String warningMessage;
    public HarvestOrderReporting withWarningMessage(String warningMessage) {
        this.warningMessage = warningMessage;
        return this;
    }
}