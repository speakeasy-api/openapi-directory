package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Alarm
 * Represents a CloudWatch alarm associated with a scaling policy.
**/
public class Alarm {
    @JsonProperty("AlarmARN")
    public String alarmARN;
    public Alarm withAlarmArn(String alarmARN) {
        this.alarmARN = alarmARN;
        return this;
    }
    @JsonProperty("AlarmName")
    public String alarmName;
    public Alarm withAlarmName(String alarmName) {
        this.alarmName = alarmName;
        return this;
    }
}