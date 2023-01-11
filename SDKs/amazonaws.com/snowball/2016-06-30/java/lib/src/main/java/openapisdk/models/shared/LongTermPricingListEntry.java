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
 * LongTermPricingListEntry
 * Each <code>LongTermPricingListEntry</code> object contains information about a long-term pricing type.
**/
public class LongTermPricingListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentActiveJob")
    public String currentActiveJob;
    public LongTermPricingListEntry withCurrentActiveJob(String currentActiveJob) {
        this.currentActiveJob = currentActiveJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsLongTermPricingAutoRenew")
    public Boolean isLongTermPricingAutoRenew;
    public LongTermPricingListEntry withIsLongTermPricingAutoRenew(Boolean isLongTermPricingAutoRenew) {
        this.isLongTermPricingAutoRenew = isLongTermPricingAutoRenew;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobIds")
    public String[] jobIds;
    public LongTermPricingListEntry withJobIds(String[] jobIds) {
        this.jobIds = jobIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LongTermPricingEndDate")
    public OffsetDateTime longTermPricingEndDate;
    public LongTermPricingListEntry withLongTermPricingEndDate(OffsetDateTime longTermPricingEndDate) {
        this.longTermPricingEndDate = longTermPricingEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LongTermPricingId")
    public String longTermPricingId;
    public LongTermPricingListEntry withLongTermPricingId(String longTermPricingId) {
        this.longTermPricingId = longTermPricingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LongTermPricingStartDate")
    public OffsetDateTime longTermPricingStartDate;
    public LongTermPricingListEntry withLongTermPricingStartDate(OffsetDateTime longTermPricingStartDate) {
        this.longTermPricingStartDate = longTermPricingStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LongTermPricingStatus")
    public String longTermPricingStatus;
    public LongTermPricingListEntry withLongTermPricingStatus(String longTermPricingStatus) {
        this.longTermPricingStatus = longTermPricingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LongTermPricingType")
    public LongTermPricingTypeEnum longTermPricingType;
    public LongTermPricingListEntry withLongTermPricingType(LongTermPricingTypeEnum longTermPricingType) {
        this.longTermPricingType = longTermPricingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplacementJob")
    public String replacementJob;
    public LongTermPricingListEntry withReplacementJob(String replacementJob) {
        this.replacementJob = replacementJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnowballType")
    public SnowballTypeEnum snowballType;
    public LongTermPricingListEntry withSnowballType(SnowballTypeEnum snowballType) {
        this.snowballType = snowballType;
        return this;
    }
}