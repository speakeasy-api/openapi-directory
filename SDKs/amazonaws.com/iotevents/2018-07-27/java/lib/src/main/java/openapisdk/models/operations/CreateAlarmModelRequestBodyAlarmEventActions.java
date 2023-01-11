package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAlarmModelRequestBodyAlarmEventActions
 * Contains information about one or more alarm actions.
**/
public class CreateAlarmModelRequestBodyAlarmEventActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmActions")
    public openapisdk.models.shared.AlarmAction[] alarmActions;
    public CreateAlarmModelRequestBodyAlarmEventActions withAlarmActions(openapisdk.models.shared.AlarmAction[] alarmActions) {
        this.alarmActions = alarmActions;
        return this;
    }
}