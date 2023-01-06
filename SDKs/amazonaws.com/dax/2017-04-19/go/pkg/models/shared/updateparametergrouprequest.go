package shared

type UpdateParameterGroupRequest struct {
	ParameterGroupName  map[string]interface{} `json:"ParameterGroupName"`
	ParameterNameValues []ParameterNameValue   `json:"ParameterNameValues"`
}
