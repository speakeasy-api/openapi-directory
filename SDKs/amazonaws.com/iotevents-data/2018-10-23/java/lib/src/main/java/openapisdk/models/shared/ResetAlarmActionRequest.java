package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResetAlarmActionRequest
 * Information needed to reset the alarm.
**/
public class ResetAlarmActionRequest {
    @JsonProperty("alarmModelName")
    public String alarmModelName;
    public ResetAlarmActionRequest withAlarmModelName(String alarmModelName) {
        this.alarmModelName = alarmModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValue")
    public String keyValue;
    public ResetAlarmActionRequest withKeyValue(String keyValue) {
        this.keyValue = keyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public ResetAlarmActionRequest withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("requestId")
    public String requestId;
    public ResetAlarmActionRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}