package shared

// Document
// A document in an index.
type Document struct {
	AccessControlList             []Principal             `json:"AccessControlList,omitempty"`
	Attributes                    []DocumentAttribute     `json:"Attributes,omitempty"`
	Blob                          *string                 `json:"Blob,omitempty"`
	ContentType                   *ContentTypeEnum        `json:"ContentType,omitempty"`
	HierarchicalAccessControlList []HierarchicalPrincipal `json:"HierarchicalAccessControlList,omitempty"`
	ID                            string                  `json:"Id"`
	S3Path                        *S3Path                 `json:"S3Path,omitempty"`
	Title                         *string                 `json:"Title,omitempty"`
}
