package shared

// PortfolioMembershipCompact
// This object determines if a user is a member of a portfolio.
type PortfolioMembershipCompact struct {
	Portfolio *PortfolioCompact `json:"portfolio,omitempty"`
	User      *UserCompact      `json:"user,omitempty"`
}
