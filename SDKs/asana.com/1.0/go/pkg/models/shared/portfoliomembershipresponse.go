package shared

// PortfolioMembershipResponse
// This object determines if a user is a member of a portfolio.
type PortfolioMembershipResponse struct {
	Portfolio *PortfolioCompact `json:"portfolio,omitempty"`
	User      *UserCompact      `json:"user,omitempty"`
}
