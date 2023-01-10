package shared

type CreateContractResponseLinks struct {
	Contracts *LinksGetContractsLink   `json:"contracts,omitempty"`
	Self      *LinksCreateContractLink `json:"self,omitempty"`
}
