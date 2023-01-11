package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAlarmsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmSummaries")
    public AlarmSummary[] alarmSummaries;
    public ListAlarmsResponse withAlarmSummaries(AlarmSummary[] alarmSummaries) {
        this.alarmSummaries = alarmSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAlarmsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}