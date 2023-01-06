package shared

type DeleteRemediationExceptionsRequest struct {
	ConfigRuleName map[string]interface{}            `json:"ConfigRuleName"`
	ResourceKeys   []RemediationExceptionResourceKey `json:"ResourceKeys"`
}
