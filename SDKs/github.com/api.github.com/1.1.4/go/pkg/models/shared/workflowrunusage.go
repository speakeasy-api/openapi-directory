package shared

type WorkflowRunUsageBillableMacos struct {
	Jobs    int64 `json:"jobs"`
	TotalMs int64 `json:"total_ms"`
}

type WorkflowRunUsageBillableUbuntu struct {
	Jobs    int64 `json:"jobs"`
	TotalMs int64 `json:"total_ms"`
}

type WorkflowRunUsageBillableWindows struct {
	Jobs    int64 `json:"jobs"`
	TotalMs int64 `json:"total_ms"`
}

type WorkflowRunUsageBillable struct {
	MACOS   *WorkflowRunUsageBillableMacos   `json:"MACOS,omitempty"`
	UBUNTU  *WorkflowRunUsageBillableUbuntu  `json:"UBUNTU,omitempty"`
	WINDOWS *WorkflowRunUsageBillableWindows `json:"WINDOWS,omitempty"`
}

// WorkflowRunUsage
// Workflow Run Usage
type WorkflowRunUsage struct {
	Billable      WorkflowRunUsageBillable `json:"billable"`
	RunDurationMs int64                    `json:"run_duration_ms"`
}
