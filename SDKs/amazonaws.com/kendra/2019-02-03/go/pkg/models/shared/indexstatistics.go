package shared

// IndexStatistics
// Provides information about the number of documents and the number of questions and answers in an index.
type IndexStatistics struct {
	FaqStatistics          FaqStatistics          `json:"FaqStatistics"`
	TextDocumentStatistics TextDocumentStatistics `json:"TextDocumentStatistics"`
}
