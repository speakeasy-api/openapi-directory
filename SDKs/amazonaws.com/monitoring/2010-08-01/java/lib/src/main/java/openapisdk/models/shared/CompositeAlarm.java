package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * CompositeAlarm
 * The details about a composite alarm.
**/
public class CompositeAlarm {
    public Boolean actionsEnabled;
    public CompositeAlarm withActionsEnabled(Boolean actionsEnabled) {
        this.actionsEnabled = actionsEnabled;
        return this;
    }
    public String[] alarmActions;
    public CompositeAlarm withAlarmActions(String[] alarmActions) {
        this.alarmActions = alarmActions;
        return this;
    }
    public String alarmArn;
    public CompositeAlarm withAlarmArn(String alarmArn) {
        this.alarmArn = alarmArn;
        return this;
    }
    public OffsetDateTime alarmConfigurationUpdatedTimestamp;
    public CompositeAlarm withAlarmConfigurationUpdatedTimestamp(OffsetDateTime alarmConfigurationUpdatedTimestamp) {
        this.alarmConfigurationUpdatedTimestamp = alarmConfigurationUpdatedTimestamp;
        return this;
    }
    public String alarmDescription;
    public CompositeAlarm withAlarmDescription(String alarmDescription) {
        this.alarmDescription = alarmDescription;
        return this;
    }
    public String alarmName;
    public CompositeAlarm withAlarmName(String alarmName) {
        this.alarmName = alarmName;
        return this;
    }
    public String alarmRule;
    public CompositeAlarm withAlarmRule(String alarmRule) {
        this.alarmRule = alarmRule;
        return this;
    }
    public String[] insufficientDataActions;
    public CompositeAlarm withInsufficientDataActions(String[] insufficientDataActions) {
        this.insufficientDataActions = insufficientDataActions;
        return this;
    }
    public String[] okActions;
    public CompositeAlarm withOkActions(String[] okActions) {
        this.okActions = okActions;
        return this;
    }
    public String stateReason;
    public CompositeAlarm withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
    public String stateReasonData;
    public CompositeAlarm withStateReasonData(String stateReasonData) {
        this.stateReasonData = stateReasonData;
        return this;
    }
    public OffsetDateTime stateUpdatedTimestamp;
    public CompositeAlarm withStateUpdatedTimestamp(OffsetDateTime stateUpdatedTimestamp) {
        this.stateUpdatedTimestamp = stateUpdatedTimestamp;
        return this;
    }
    public StateValueEnum stateValue;
    public CompositeAlarm withStateValue(StateValueEnum stateValue) {
        this.stateValue = stateValue;
        return this;
    }
}