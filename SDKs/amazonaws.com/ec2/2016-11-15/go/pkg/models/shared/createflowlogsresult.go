package shared

type CreateFlowLogsResult struct {
	ClientToken  map[string]interface{}
	FlowLogIds   map[string]interface{}
	Unsuccessful map[string]interface{}
}
