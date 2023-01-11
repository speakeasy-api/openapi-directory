package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeScheduledAuditResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfMonth")
    public String dayOfMonth;
    public DescribeScheduledAuditResponse withDayOfMonth(String dayOfMonth) {
        this.dayOfMonth = dayOfMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public DayOfWeekEnum dayOfWeek;
    public DescribeScheduledAuditResponse withDayOfWeek(DayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public AuditFrequencyEnum frequency;
    public DescribeScheduledAuditResponse withFrequency(AuditFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledAuditArn")
    public String scheduledAuditArn;
    public DescribeScheduledAuditResponse withScheduledAuditArn(String scheduledAuditArn) {
        this.scheduledAuditArn = scheduledAuditArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledAuditName")
    public String scheduledAuditName;
    public DescribeScheduledAuditResponse withScheduledAuditName(String scheduledAuditName) {
        this.scheduledAuditName = scheduledAuditName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCheckNames")
    public String[] targetCheckNames;
    public DescribeScheduledAuditResponse withTargetCheckNames(String[] targetCheckNames) {
        this.targetCheckNames = targetCheckNames;
        return this;
    }
}