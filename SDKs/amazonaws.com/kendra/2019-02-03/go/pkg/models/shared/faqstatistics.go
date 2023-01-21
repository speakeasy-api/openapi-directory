package shared

// FaqStatistics
// Provides statistical information about the FAQ questions and answers contained in an index.
type FaqStatistics struct {
	IndexedQuestionAnswersCount int64 `json:"IndexedQuestionAnswersCount"`
}
