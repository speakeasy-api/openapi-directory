package shared

// TextDocumentStatistics
// Provides information about text documents indexed in an index.
type TextDocumentStatistics struct {
	IndexedTextBytes          int64 `json:"IndexedTextBytes"`
	IndexedTextDocumentsCount int64 `json:"IndexedTextDocumentsCount"`
}
