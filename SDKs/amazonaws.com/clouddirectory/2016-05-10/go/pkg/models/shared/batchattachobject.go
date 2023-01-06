package shared

// BatchAttachObjectChildReference
// The reference that identifies an object.
type BatchAttachObjectChildReference struct {
	Selector *string `json:"Selector,omitempty"`
}

// BatchAttachObject
// Represents the output of an <a>AttachObject</a> operation.
type BatchAttachObject struct {
	ChildReference  BatchAttachObjectChildReference `json:"ChildReference"`
	LinkName        string                          `json:"LinkName"`
	ParentReference ObjectReference                 `json:"ParentReference"`
}
