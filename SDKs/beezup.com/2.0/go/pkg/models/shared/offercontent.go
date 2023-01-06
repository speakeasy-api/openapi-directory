package shared

type OfferContent struct {
	ContractBillingPeriodInfo           ContractBillingPeriodInfo           `json:"contractBillingPeriodInfo"`
	ContractBonusInfo                   ContractBonusInfo                   `json:"contractBonusInfo"`
	ContractClickInfo                   ContractClickInfo                   `json:"contractClickInfo"`
	ContractCommitmentInfo              ContractCommitmentInfo              `json:"contractCommitmentInfo"`
	ContractDiscountInfo                ContractDiscountInfo                `json:"contractDiscountInfo"`
	ContractMoneyInfo                   ContractMoneyInfo                   `json:"contractMoneyInfo"`
	ContractStoreInfo                   ContractStoreInfo                   `json:"contractStoreInfo"`
	ContractTerminationReason           *string                             `json:"contractTerminationReason,omitempty"`
	ContractTerminationReasonType       *int32                              `json:"contractTerminationReasonType,omitempty"`
	NotifyVatExemption                  bool                                `json:"notifyVatExemption"`
	PreviousFixPeriodInvoiceProrataInfo PreviousFixPeriodInvoiceProrataInfo `json:"previousFixPeriodInvoiceProrataInfo"`
}
