package shared

type QueryResultTypeEnum string

const (
	QueryResultTypeEnumDocument       QueryResultTypeEnum = "DOCUMENT"
	QueryResultTypeEnumQuestionAnswer QueryResultTypeEnum = "QUESTION_ANSWER"
	QueryResultTypeEnumAnswer         QueryResultTypeEnum = "ANSWER"
)
