package shared

type CurrentContractInfoLinks struct {
	Disable  *LinksTerminateCurrentContractLink  `json:"disable,omitempty"`
	Reenable *LinksReactivateCurrentContractLink `json:"reenable,omitempty"`
}
