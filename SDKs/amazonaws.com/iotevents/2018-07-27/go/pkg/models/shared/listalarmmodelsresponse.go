package shared

type ListAlarmModelsResponse struct {
	AlarmModelSummaries map[string]interface{} `json:"alarmModelSummaries,omitempty"`
	NextToken           *string                `json:"nextToken,omitempty"`
}
