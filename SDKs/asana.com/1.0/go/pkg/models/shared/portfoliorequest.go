package shared

type PortfolioRequestColorEnum string

const (
	PortfolioRequestColorEnumDarkPink      PortfolioRequestColorEnum = "dark-pink"
	PortfolioRequestColorEnumDarkGreen     PortfolioRequestColorEnum = "dark-green"
	PortfolioRequestColorEnumDarkBlue      PortfolioRequestColorEnum = "dark-blue"
	PortfolioRequestColorEnumDarkRed       PortfolioRequestColorEnum = "dark-red"
	PortfolioRequestColorEnumDarkTeal      PortfolioRequestColorEnum = "dark-teal"
	PortfolioRequestColorEnumDarkBrown     PortfolioRequestColorEnum = "dark-brown"
	PortfolioRequestColorEnumDarkOrange    PortfolioRequestColorEnum = "dark-orange"
	PortfolioRequestColorEnumDarkPurple    PortfolioRequestColorEnum = "dark-purple"
	PortfolioRequestColorEnumDarkWarmGray  PortfolioRequestColorEnum = "dark-warm-gray"
	PortfolioRequestColorEnumLightPink     PortfolioRequestColorEnum = "light-pink"
	PortfolioRequestColorEnumLightGreen    PortfolioRequestColorEnum = "light-green"
	PortfolioRequestColorEnumLightBlue     PortfolioRequestColorEnum = "light-blue"
	PortfolioRequestColorEnumLightRed      PortfolioRequestColorEnum = "light-red"
	PortfolioRequestColorEnumLightTeal     PortfolioRequestColorEnum = "light-teal"
	PortfolioRequestColorEnumLightBrown    PortfolioRequestColorEnum = "light-brown"
	PortfolioRequestColorEnumLightOrange   PortfolioRequestColorEnum = "light-orange"
	PortfolioRequestColorEnumLightPurple   PortfolioRequestColorEnum = "light-purple"
	PortfolioRequestColorEnumLightWarmGray PortfolioRequestColorEnum = "light-warm-gray"
)

// PortfolioRequestInput
// A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/docs/asana-project-statuses) update.
// Portfolios have some restrictions on size. Each portfolio has a max of 250 items and, like projects, a max of 20 custom fields.
type PortfolioRequestInput struct {
	Color     *PortfolioRequestColorEnum `json:"color,omitempty"`
	Members   []string                   `json:"members,omitempty"`
	Name      *string                    `json:"name,omitempty"`
	Workspace *string                    `json:"workspace,omitempty"`
}
