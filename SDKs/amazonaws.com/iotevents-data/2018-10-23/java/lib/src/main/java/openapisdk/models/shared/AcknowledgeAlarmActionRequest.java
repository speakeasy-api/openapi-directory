package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcknowledgeAlarmActionRequest
 * Information needed to acknowledge the alarm.
**/
public class AcknowledgeAlarmActionRequest {
    @JsonProperty("alarmModelName")
    public String alarmModelName;
    public AcknowledgeAlarmActionRequest withAlarmModelName(String alarmModelName) {
        this.alarmModelName = alarmModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValue")
    public String keyValue;
    public AcknowledgeAlarmActionRequest withKeyValue(String keyValue) {
        this.keyValue = keyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public AcknowledgeAlarmActionRequest withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public AcknowledgeAlarmActionRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}