package shared

// QueryResultItem
// <p>A single query result.</p> <p>A query result contains information about a document returned by the query. This includes the original location of the document, a list of attributes assigned to the document, and relevant text from the document that satisfies the query.</p>
type QueryResultItem struct {
	AdditionalAttributes []AdditionalResultAttribute `json:"AdditionalAttributes,omitempty"`
	DocumentAttributes   []DocumentAttribute         `json:"DocumentAttributes,omitempty"`
	DocumentExcerpt      *TextWithHighlights         `json:"DocumentExcerpt,omitempty"`
	DocumentID           *string                     `json:"DocumentId,omitempty"`
	DocumentTitle        *TextWithHighlights         `json:"DocumentTitle,omitempty"`
	DocumentURI          *string                     `json:"DocumentURI,omitempty"`
	FeedbackToken        *string                     `json:"FeedbackToken,omitempty"`
	ID                   *string                     `json:"Id,omitempty"`
	ScoreAttributes      *ScoreAttributes            `json:"ScoreAttributes,omitempty"`
	Type                 *QueryResultTypeEnum        `json:"Type,omitempty"`
}
