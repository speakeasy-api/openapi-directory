package shared

// HierarchicalPrincipal
//
//	Information to define the hierarchy for which documents users should have access to.
type HierarchicalPrincipal struct {
	PrincipalList []Principal `json:"PrincipalList"`
}
