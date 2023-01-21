package shared

// Principal
// Provides user and group information for document access filtering.
type Principal struct {
	Access       ReadAccessTypeEnum `json:"Access"`
	DataSourceID *string            `json:"DataSourceId,omitempty"`
	Name         string             `json:"Name"`
	Type         PrincipalTypeEnum  `json:"Type"`
}
