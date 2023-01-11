package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlarmConfiguration
 * Information about alarms associated with the deployment group.
**/
public class AlarmConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarms")
    public Alarm[] alarms;
    public AlarmConfiguration withAlarms(Alarm[] alarms) {
        this.alarms = alarms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public AlarmConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignorePollAlarmFailure")
    public Boolean ignorePollAlarmFailure;
    public AlarmConfiguration withIgnorePollAlarmFailure(Boolean ignorePollAlarmFailure) {
        this.ignorePollAlarmFailure = ignorePollAlarmFailure;
        return this;
    }
}