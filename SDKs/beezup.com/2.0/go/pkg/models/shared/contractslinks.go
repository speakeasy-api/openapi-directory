package shared

type ContractsLinks struct {
	Create *LinksCreateContractLink `json:"create,omitempty"`
	Self   *LinksGetContractsLink   `json:"self,omitempty"`
}
