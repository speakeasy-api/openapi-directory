package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAlarmModelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmCapabilities")
    public CreateAlarmModelRequestBodyAlarmCapabilities alarmCapabilities;
    public CreateAlarmModelRequestBody withAlarmCapabilities(CreateAlarmModelRequestBodyAlarmCapabilities alarmCapabilities) {
        this.alarmCapabilities = alarmCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmEventActions")
    public CreateAlarmModelRequestBodyAlarmEventActions alarmEventActions;
    public CreateAlarmModelRequestBody withAlarmEventActions(CreateAlarmModelRequestBodyAlarmEventActions alarmEventActions) {
        this.alarmEventActions = alarmEventActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmModelDescription")
    public String alarmModelDescription;
    public CreateAlarmModelRequestBody withAlarmModelDescription(String alarmModelDescription) {
        this.alarmModelDescription = alarmModelDescription;
        return this;
    }
    @JsonProperty("alarmModelName")
    public String alarmModelName;
    public CreateAlarmModelRequestBody withAlarmModelName(String alarmModelName) {
        this.alarmModelName = alarmModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmNotification")
    public CreateAlarmModelRequestBodyAlarmNotification alarmNotification;
    public CreateAlarmModelRequestBody withAlarmNotification(CreateAlarmModelRequestBodyAlarmNotification alarmNotification) {
        this.alarmNotification = alarmNotification;
        return this;
    }
    @JsonProperty("alarmRule")
    public CreateAlarmModelRequestBodyAlarmRule alarmRule;
    public CreateAlarmModelRequestBody withAlarmRule(CreateAlarmModelRequestBodyAlarmRule alarmRule) {
        this.alarmRule = alarmRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public CreateAlarmModelRequestBody withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateAlarmModelRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public Long severity;
    public CreateAlarmModelRequestBody withSeverity(Long severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateAlarmModelRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}