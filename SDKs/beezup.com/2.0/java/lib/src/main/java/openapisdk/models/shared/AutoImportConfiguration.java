package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AutoImportConfiguration {
    @JsonProperty("duplicateProductConfiguration")
    public DuplicateProductValueConfiguration duplicateProductConfiguration;
    public AutoImportConfiguration withDuplicateProductConfiguration(DuplicateProductValueConfiguration duplicateProductConfiguration) {
        this.duplicateProductConfiguration = duplicateProductConfiguration;
        return this;
    }
    @JsonProperty("input")
    public InputConfiguration input;
    public AutoImportConfiguration withInput(InputConfiguration input) {
        this.input = input;
        return this;
    }
    @JsonProperty("inputConfiguredByUserId")
    public String inputConfiguredByUserId;
    public AutoImportConfiguration withInputConfiguredByUserId(String inputConfiguredByUserId) {
        this.inputConfiguredByUserId = inputConfiguredByUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pauseStatusChangedByUserId")
    public String pauseStatusChangedByUserId;
    public AutoImportConfiguration withPauseStatusChangedByUserId(String pauseStatusChangedByUserId) {
        this.pauseStatusChangedByUserId = pauseStatusChangedByUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("pauseStatusChangedUtcDate")
    public OffsetDateTime pauseStatusChangedUtcDate;
    public AutoImportConfiguration withPauseStatusChangedUtcDate(OffsetDateTime pauseStatusChangedUtcDate) {
        this.pauseStatusChangedUtcDate = pauseStatusChangedUtcDate;
        return this;
    }
    @JsonProperty("paused")
    public Boolean paused;
    public AutoImportConfiguration withPaused(Boolean paused) {
        this.paused = paused;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledByUserId")
    public String scheduledByUserId;
    public AutoImportConfiguration withScheduledByUserId(String scheduledByUserId) {
        this.scheduledByUserId = scheduledByUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedulingLocalTimeZoneName")
    public String schedulingLocalTimeZoneName;
    public AutoImportConfiguration withSchedulingLocalTimeZoneName(String schedulingLocalTimeZoneName) {
        this.schedulingLocalTimeZoneName = schedulingLocalTimeZoneName;
        return this;
    }
    @JsonProperty("schedulingType")
    public SchedulingTypeEnum schedulingType;
    public AutoImportConfiguration withSchedulingType(SchedulingTypeEnum schedulingType) {
        this.schedulingType = schedulingType;
        return this;
    }
    @JsonProperty("schedulingValue")
    public String[] schedulingValue;
    public AutoImportConfiguration withSchedulingValue(String[] schedulingValue) {
        this.schedulingValue = schedulingValue;
        return this;
    }
}