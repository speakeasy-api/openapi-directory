package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlarmEventActions
 * Contains information about one or more alarm actions.
**/
public class AlarmEventActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmActions")
    public AlarmAction[] alarmActions;
    public AlarmEventActions withAlarmActions(AlarmAction[] alarmActions) {
        this.alarmActions = alarmActions;
        return this;
    }
}