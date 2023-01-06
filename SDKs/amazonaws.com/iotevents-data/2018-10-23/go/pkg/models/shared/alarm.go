package shared

import (
	"time"
)

// AlarmAlarmState
// Contains information about the current state of the alarm.
type AlarmAlarmState struct {
	CustomerAction *CustomerAction     `json:"customerAction,omitempty"`
	RuleEvaluation *RuleEvaluation     `json:"ruleEvaluation,omitempty"`
	StateName      *AlarmStateNameEnum `json:"stateName,omitempty"`
	SystemEvent    *SystemEvent        `json:"systemEvent,omitempty"`
}

// Alarm
// Contains information about an alarm.
type Alarm struct {
	AlarmModelName    *string          `json:"alarmModelName,omitempty"`
	AlarmModelVersion *string          `json:"alarmModelVersion,omitempty"`
	AlarmState        *AlarmAlarmState `json:"alarmState,omitempty"`
	CreationTime      *time.Time       `json:"creationTime,omitempty"`
	KeyValue          *string          `json:"keyValue,omitempty"`
	LastUpdateTime    *time.Time       `json:"lastUpdateTime,omitempty"`
	Severity          *int64           `json:"severity,omitempty"`
}
