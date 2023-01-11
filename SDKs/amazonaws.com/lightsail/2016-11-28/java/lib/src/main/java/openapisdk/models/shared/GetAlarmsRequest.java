package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAlarmsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmName")
    public String alarmName;
    public GetAlarmsRequest withAlarmName(String alarmName) {
        this.alarmName = alarmName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitoredResourceName")
    public String monitoredResourceName;
    public GetAlarmsRequest withMonitoredResourceName(String monitoredResourceName) {
        this.monitoredResourceName = monitoredResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GetAlarmsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}