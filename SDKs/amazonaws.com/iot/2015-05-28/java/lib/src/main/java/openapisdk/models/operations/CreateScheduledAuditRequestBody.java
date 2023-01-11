package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateScheduledAuditRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfMonth")
    public String dayOfMonth;
    public CreateScheduledAuditRequestBody withDayOfMonth(String dayOfMonth) {
        this.dayOfMonth = dayOfMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public CreateScheduledAuditRequestBodyDayOfWeekEnum dayOfWeek;
    public CreateScheduledAuditRequestBody withDayOfWeek(CreateScheduledAuditRequestBodyDayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    @JsonProperty("frequency")
    public CreateScheduledAuditRequestBodyFrequencyEnum frequency;
    public CreateScheduledAuditRequestBody withFrequency(CreateScheduledAuditRequestBodyFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateScheduledAuditRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("targetCheckNames")
    public String[] targetCheckNames;
    public CreateScheduledAuditRequestBody withTargetCheckNames(String[] targetCheckNames) {
        this.targetCheckNames = targetCheckNames;
        return this;
    }
}