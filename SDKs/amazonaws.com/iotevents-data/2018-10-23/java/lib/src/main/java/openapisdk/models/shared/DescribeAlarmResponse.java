package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAlarmResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarm")
    public Alarm alarm;
    public DescribeAlarmResponse withAlarm(Alarm alarm) {
        this.alarm = alarm;
        return this;
    }
}