package shared

type WorkflowUsageBillableMacos struct {
	TotalMs *int64 `json:"total_ms,omitempty"`
}

type WorkflowUsageBillableUbuntu struct {
	TotalMs *int64 `json:"total_ms,omitempty"`
}

type WorkflowUsageBillableWindows struct {
	TotalMs *int64 `json:"total_ms,omitempty"`
}

type WorkflowUsageBillable struct {
	MACOS   *WorkflowUsageBillableMacos   `json:"MACOS,omitempty"`
	UBUNTU  *WorkflowUsageBillableUbuntu  `json:"UBUNTU,omitempty"`
	WINDOWS *WorkflowUsageBillableWindows `json:"WINDOWS,omitempty"`
}

// WorkflowUsage
// Workflow Usage
type WorkflowUsage struct {
	Billable WorkflowUsageBillable `json:"billable"`
}
