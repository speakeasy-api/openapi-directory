package shared

type UserLovIndexLinks struct {
	Lists map[string]map[string]interface{} `json:"lists,omitempty"`
	Self  map[string]interface{}            `json:"self,omitempty"`
}
