package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TestAlarmRequest {
    @JsonProperty("alarmName")
    public String alarmName;
    public TestAlarmRequest withAlarmName(String alarmName) {
        this.alarmName = alarmName;
        return this;
    }
    @JsonProperty("state")
    public AlarmStateEnum state;
    public TestAlarmRequest withState(AlarmStateEnum state) {
        this.state = state;
        return this;
    }
}