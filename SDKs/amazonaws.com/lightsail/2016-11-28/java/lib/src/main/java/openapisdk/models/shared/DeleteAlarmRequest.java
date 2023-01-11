package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAlarmRequest {
    @JsonProperty("alarmName")
    public String alarmName;
    public DeleteAlarmRequest withAlarmName(String alarmName) {
        this.alarmName = alarmName;
        return this;
    }
}