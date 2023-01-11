package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAlarmModelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmCapabilities")
    public UpdateAlarmModelRequestBodyAlarmCapabilities alarmCapabilities;
    public UpdateAlarmModelRequestBody withAlarmCapabilities(UpdateAlarmModelRequestBodyAlarmCapabilities alarmCapabilities) {
        this.alarmCapabilities = alarmCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmEventActions")
    public UpdateAlarmModelRequestBodyAlarmEventActions alarmEventActions;
    public UpdateAlarmModelRequestBody withAlarmEventActions(UpdateAlarmModelRequestBodyAlarmEventActions alarmEventActions) {
        this.alarmEventActions = alarmEventActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmModelDescription")
    public String alarmModelDescription;
    public UpdateAlarmModelRequestBody withAlarmModelDescription(String alarmModelDescription) {
        this.alarmModelDescription = alarmModelDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmNotification")
    public UpdateAlarmModelRequestBodyAlarmNotification alarmNotification;
    public UpdateAlarmModelRequestBody withAlarmNotification(UpdateAlarmModelRequestBodyAlarmNotification alarmNotification) {
        this.alarmNotification = alarmNotification;
        return this;
    }
    @JsonProperty("alarmRule")
    public UpdateAlarmModelRequestBodyAlarmRule alarmRule;
    public UpdateAlarmModelRequestBody withAlarmRule(UpdateAlarmModelRequestBodyAlarmRule alarmRule) {
        this.alarmRule = alarmRule;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdateAlarmModelRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public Long severity;
    public UpdateAlarmModelRequestBody withSeverity(Long severity) {
        this.severity = severity;
        return this;
    }
}