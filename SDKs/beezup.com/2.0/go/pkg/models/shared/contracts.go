package shared

type Contracts struct {
	Current *CurrentContractInfo `json:"current,omitempty"`
	Links   ContractsLinks       `json:"links"`
	Next    *NextContractInfo    `json:"next,omitempty"`
}
