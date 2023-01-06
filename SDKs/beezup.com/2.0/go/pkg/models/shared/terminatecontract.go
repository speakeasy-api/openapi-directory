package shared

// TerminateContract
// The contract termination info
type TerminateContract struct {
	ContractTerminationReason     *string `json:"contractTerminationReason,omitempty"`
	ContractTerminationReasonType int32   `json:"contractTerminationReasonType"`
}
