package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnableAlarmActionRequest
 * Information needed to enable the alarm.
**/
public class EnableAlarmActionRequest {
    @JsonProperty("alarmModelName")
    public String alarmModelName;
    public EnableAlarmActionRequest withAlarmModelName(String alarmModelName) {
        this.alarmModelName = alarmModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValue")
    public String keyValue;
    public EnableAlarmActionRequest withKeyValue(String keyValue) {
        this.keyValue = keyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public EnableAlarmActionRequest withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public EnableAlarmActionRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}