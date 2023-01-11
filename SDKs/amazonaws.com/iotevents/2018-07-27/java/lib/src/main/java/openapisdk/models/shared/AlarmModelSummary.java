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
 * AlarmModelSummary
 * Contains a summary of an alarm model.
**/
public class AlarmModelSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmModelDescription")
    public String alarmModelDescription;
    public AlarmModelSummary withAlarmModelDescription(String alarmModelDescription) {
        this.alarmModelDescription = alarmModelDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmModelName")
    public String alarmModelName;
    public AlarmModelSummary withAlarmModelName(String alarmModelName) {
        this.alarmModelName = alarmModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public AlarmModelSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
}