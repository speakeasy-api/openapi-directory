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
 * ScheduledTriggerProperties
 *  Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. 
**/
public class ScheduledTriggerProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataPullMode")
    public DataPullModeEnum dataPullMode;
    public ScheduledTriggerProperties withDataPullMode(DataPullModeEnum dataPullMode) {
        this.dataPullMode = dataPullMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("firstExecutionFrom")
    public OffsetDateTime firstExecutionFrom;
    public ScheduledTriggerProperties withFirstExecutionFrom(OffsetDateTime firstExecutionFrom) {
        this.firstExecutionFrom = firstExecutionFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduleEndTime")
    public OffsetDateTime scheduleEndTime;
    public ScheduledTriggerProperties withScheduleEndTime(OffsetDateTime scheduleEndTime) {
        this.scheduleEndTime = scheduleEndTime;
        return this;
    }
    @JsonProperty("scheduleExpression")
    public String scheduleExpression;
    public ScheduledTriggerProperties withScheduleExpression(String scheduleExpression) {
        this.scheduleExpression = scheduleExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleOffset")
    public Long scheduleOffset;
    public ScheduledTriggerProperties withScheduleOffset(Long scheduleOffset) {
        this.scheduleOffset = scheduleOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduleStartTime")
    public OffsetDateTime scheduleStartTime;
    public ScheduledTriggerProperties withScheduleStartTime(OffsetDateTime scheduleStartTime) {
        this.scheduleStartTime = scheduleStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public ScheduledTriggerProperties withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}