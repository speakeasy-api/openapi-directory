package shared

import (
	"time"
)

// ContractCommitmentInfo
// Describe the commitment information related to the offer.
type ContractCommitmentInfo struct {
	CommercialCreatorUserID               *string                         `json:"commercialCreatorUserId,omitempty"`
	CommercialUserID                      *string                         `json:"commercialUserId,omitempty"`
	CommitmentCalculatedFinishDate        *time.Time                      `json:"commitmentCalculatedFinishDate,omitempty"`
	CommitmentPeriodInMonth               *int32                          `json:"commitmentPeriodInMonth,omitempty"`
	ContractType                          *int32                          `json:"contractType,omitempty"`
	CouponOfferCode                       *string                         `json:"couponOfferCode,omitempty"`
	CurrentContractID                     *string                         `json:"currentContractId,omitempty"`
	CurrentContractTerminationDate        *time.Time                      `json:"currentContractTerminationDate,omitempty"`
	CurrentCustomerPaymentMethod          *PaymentMethodEnum              `json:"currentCustomerPaymentMethod,omitempty"`
	FixedAndVariableClickInfo             *FixedAndVariableClickModelInfo `json:"fixedAndVariableClickInfo,omitempty"`
	IsCustomerWantsToTerminateHisContract *bool                           `json:"isCustomerWantsToTerminateHisContract,omitempty"`
	IsModelMustBeTransmittedInNewContract *bool                           `json:"isModelMustBeTransmittedInNewContract,omitempty"`
	MinBillingPeriodInMonths              *int32                          `json:"minBillingPeriodInMonths,omitempty"`
	Model                                 *string                         `json:"model,omitempty"`
	NewContractStartDate                  *time.Time                      `json:"newContractStartDate,omitempty"`
	OfferID                               *int32                          `json:"offerId,omitempty"`
	OfferName                             *string                         `json:"offerName,omitempty"`
	PaymentDelayInDays                    *int32                          `json:"paymentDelayInDays,omitempty"`
	PaymentMethodAuthorized               *PaymentMethodEnum              `json:"paymentMethodAuthorized,omitempty"`
	RequestedPaymentMethod                *PaymentMethodEnum              `json:"requestedPaymentMethod,omitempty"`
	TrialPeriodFinishDate                 *time.Time                      `json:"trialPeriodFinishDate,omitempty"`
	TrialPeriodInMonth                    *int32                          `json:"trialPeriodInMonth,omitempty"`
	VariableModelInfo                     *VariableModelInfo              `json:"variableModelInfo,omitempty"`
}
