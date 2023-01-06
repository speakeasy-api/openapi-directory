package shared

type ResourceDeleteTypeEnum string

const (
	ResourceDeleteTypeEnumResource ResourceDeleteTypeEnum = "resource"
)

// ResourceDelete
// All properties of the resource delete object
type ResourceDelete struct {
	ID   *int64                  `json:"id,omitempty"`
	Meta map[string]interface{}  `json:"meta,omitempty"`
	Type *ResourceDeleteTypeEnum `json:"type,omitempty"`
}
