package shared

type UpdateActionResultsMessage struct {
	ProcessedUpdateActions   []ProcessedUpdateActionList
	UnprocessedUpdateActions []UnprocessedUpdateActionList
}
