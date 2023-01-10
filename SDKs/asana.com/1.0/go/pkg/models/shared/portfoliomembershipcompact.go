package shared

// PortfolioMembershipCompact
// This object determines if a user is a member of a portfolio.
type PortfolioMembershipCompact struct {
	Gid          *string           `json:"gid,omitempty"`
	Portfolio    *PortfolioCompact `json:"portfolio,omitempty"`
	ResourceType *string           `json:"resource_type,omitempty"`
	User         *UserCompact      `json:"user,omitempty"`
}
