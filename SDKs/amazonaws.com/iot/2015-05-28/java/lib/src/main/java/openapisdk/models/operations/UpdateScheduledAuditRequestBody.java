package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateScheduledAuditRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfMonth")
    public String dayOfMonth;
    public UpdateScheduledAuditRequestBody withDayOfMonth(String dayOfMonth) {
        this.dayOfMonth = dayOfMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public UpdateScheduledAuditRequestBodyDayOfWeekEnum dayOfWeek;
    public UpdateScheduledAuditRequestBody withDayOfWeek(UpdateScheduledAuditRequestBodyDayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public UpdateScheduledAuditRequestBodyFrequencyEnum frequency;
    public UpdateScheduledAuditRequestBody withFrequency(UpdateScheduledAuditRequestBodyFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCheckNames")
    public String[] targetCheckNames;
    public UpdateScheduledAuditRequestBody withTargetCheckNames(String[] targetCheckNames) {
        this.targetCheckNames = targetCheckNames;
        return this;
    }
}