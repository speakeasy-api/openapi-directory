package shared

import (
	"time"
)

// CurrentContractInfo
// Get the conditions of your current contract
type CurrentContractInfo struct {
	AdditionalClickPrice              *float64                        `json:"additionalClickPrice,omitempty"`
	BillingPeriodInMonth              *int32                          `json:"billingPeriodInMonth,omitempty"`
	BillingPeriodPercentDiscount      *float64                        `json:"billingPeriodPercentDiscount,omitempty"`
	ClickIncluded                     *int32                          `json:"clickIncluded,omitempty"`
	CommitmentCalculatedFinishUtcDate *time.Time                      `json:"commitmentCalculatedFinishUtcDate,omitempty"`
	CommitmentPeriodInMonth           *int32                          `json:"commitmentPeriodInMonth,omitempty"`
	ContractID                        *string                         `json:"contractId,omitempty"`
	CurrencyCode                      *string                         `json:"currencyCode,omitempty"`
	DiscountDurationInMonth           *int32                          `json:"discountDurationInMonth,omitempty"`
	DiscountEndUtcDate                *time.Time                      `json:"discountEndUtcDate,omitempty"`
	FixedAndVariableClickInfo         *FixedAndVariableClickModelInfo `json:"fixedAndVariableClickInfo,omitempty"`
	FixedPrice                        *float64                        `json:"fixedPrice,omitempty"`
	IPUserCreation                    *string                         `json:"ipUserCreation,omitempty"`
	IPUserModification                *string                         `json:"ipUserModification,omitempty"`
	IsCommitmentRenewalAutomatically  *bool                           `json:"isCommitmentRenewalAutomatically,omitempty"`
	IsModifiableContract              *bool                           `json:"isModifiableContract,omitempty"`
	Links                             CurrentContractInfoLinks        `json:"links"`
	OfferID                           *int32                          `json:"offerId,omitempty"`
	OfferName                         *string                         `json:"offerName,omitempty"`
	PercentDiscount                   *float64                        `json:"percentDiscount,omitempty"`
	StartUtcDate                      *time.Time                      `json:"startUtcDate,omitempty"`
	StoreCount                        *int32                          `json:"storeCount,omitempty"`
	TrialPeriodInMonth                *int32                          `json:"trialPeriodInMonth,omitempty"`
	VariableModelInfo                 *VariableModelInfo              `json:"variableModelInfo,omitempty"`
}
