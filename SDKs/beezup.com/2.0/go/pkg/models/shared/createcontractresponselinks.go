package shared

type CreateContractResponseLinks struct {
	Contracts map[string]interface{} `json:"contracts,omitempty"`
	Self      map[string]interface{} `json:"self,omitempty"`
}
