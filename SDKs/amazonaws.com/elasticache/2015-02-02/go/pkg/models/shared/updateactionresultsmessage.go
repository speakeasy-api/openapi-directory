package shared

type UpdateActionResultsMessage struct {
	ProcessedUpdateActions   []map[string]interface{}
	UnprocessedUpdateActions []map[string]interface{}
}
