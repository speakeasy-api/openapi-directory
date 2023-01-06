package shared

// Principal
// Information about a principal.
type Principal struct {
	PrincipalARN  *string            `json:"PrincipalARN,omitempty"`
	PrincipalType *PrincipalTypeEnum `json:"PrincipalType,omitempty"`
}
