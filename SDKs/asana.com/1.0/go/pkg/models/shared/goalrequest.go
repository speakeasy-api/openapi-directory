package shared

type GoalRequestMetricUnitEnum string

const (
	GoalRequestMetricUnitEnumNone       GoalRequestMetricUnitEnum = "none"
	GoalRequestMetricUnitEnumCurrency   GoalRequestMetricUnitEnum = "currency"
	GoalRequestMetricUnitEnumPercentage GoalRequestMetricUnitEnum = "percentage"
)

// GoalRequestMetricInput
// A generic Asana Resource, containing a globally unique identifier.
type GoalRequestMetricInput struct {
	CurrencyCode        *string                    `json:"currency_code,omitempty"`
	CurrentDisplayValue *string                    `json:"current_display_value,omitempty"`
	CurrentNumberValue  *float64                   `json:"current_number_value,omitempty"`
	InitialNumberValue  *float64                   `json:"initial_number_value,omitempty"`
	Precision           *int64                     `json:"precision,omitempty"`
	TargetNumberValue   *float64                   `json:"target_number_value,omitempty"`
	Unit                *GoalRequestMetricUnitEnum `json:"unit,omitempty"`
}

// GoalRequestOwnerInput
// A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
type GoalRequestOwnerInput struct {
	Name *string `json:"name,omitempty"`
}

// GoalRequestTeamInput
// A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
type GoalRequestTeamInput struct {
	Name *string `json:"name,omitempty"`
}

type GoalRequestTimePeriodPeriodEnum string

const (
	GoalRequestTimePeriodPeriodEnumFy GoalRequestTimePeriodPeriodEnum = "FY"
	GoalRequestTimePeriodPeriodEnumH1 GoalRequestTimePeriodPeriodEnum = "H1"
	GoalRequestTimePeriodPeriodEnumH2 GoalRequestTimePeriodPeriodEnum = "H2"
	GoalRequestTimePeriodPeriodEnumQ1 GoalRequestTimePeriodPeriodEnum = "Q1"
	GoalRequestTimePeriodPeriodEnumQ2 GoalRequestTimePeriodPeriodEnum = "Q2"
	GoalRequestTimePeriodPeriodEnumQ3 GoalRequestTimePeriodPeriodEnum = "Q3"
	GoalRequestTimePeriodPeriodEnumQ4 GoalRequestTimePeriodPeriodEnum = "Q4"
)

// GoalRequestTimePeriodInput
// A generic Asana Resource, containing a globally unique identifier.
type GoalRequestTimePeriodInput struct {
	EndOn   *string                          `json:"end_on,omitempty"`
	Period  *GoalRequestTimePeriodPeriodEnum `json:"period,omitempty"`
	StartOn *string                          `json:"start_on,omitempty"`
}

// GoalRequestWorkspaceInput
// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
type GoalRequestWorkspaceInput struct {
	Name *string `json:"name,omitempty"`
}

// GoalRequestInput
// A generic Asana Resource, containing a globally unique identifier.
type GoalRequestInput struct {
	DueOn            *string                     `json:"due_on,omitempty"`
	Followers        []UserCompactInput          `json:"followers,omitempty"`
	HTMLNotes        *string                     `json:"html_notes,omitempty"`
	IsWorkspaceLevel *bool                       `json:"is_workspace_level,omitempty"`
	Liked            *bool                       `json:"liked,omitempty"`
	Metric           *GoalRequestMetricInput     `json:"metric,omitempty"`
	Name             *string                     `json:"name,omitempty"`
	Notes            *string                     `json:"notes,omitempty"`
	Owner            *GoalRequestOwnerInput      `json:"owner,omitempty"`
	StartOn          *string                     `json:"start_on,omitempty"`
	Status           *string                     `json:"status,omitempty"`
	Team             *GoalRequestTeamInput       `json:"team,omitempty"`
	TimePeriod       *GoalRequestTimePeriodInput `json:"time_period,omitempty"`
	Workspace        *GoalRequestWorkspaceInput  `json:"workspace,omitempty"`
}
