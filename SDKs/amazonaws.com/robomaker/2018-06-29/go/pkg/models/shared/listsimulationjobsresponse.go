package shared

type ListSimulationJobsResponse struct {
	NextToken              *string                `json:"nextToken,omitempty"`
	SimulationJobSummaries map[string]interface{} `json:"simulationJobSummaries"`
}
