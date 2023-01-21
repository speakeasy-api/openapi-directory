package shared

// ConfluenceSpaceToIndexFieldMapping
// <p>Defines the mapping between a field in the Confluence data source to a Amazon Kendra index field.</p> <p>You must first create the index field using the <code>UpdateIndex</code> operation. </p>
type ConfluenceSpaceToIndexFieldMapping struct {
	DataSourceFieldName *ConfluenceSpaceFieldNameEnum `json:"DataSourceFieldName,omitempty"`
	DateFieldFormat     *string                       `json:"DateFieldFormat,omitempty"`
	IndexFieldName      *string                       `json:"IndexFieldName,omitempty"`
}
