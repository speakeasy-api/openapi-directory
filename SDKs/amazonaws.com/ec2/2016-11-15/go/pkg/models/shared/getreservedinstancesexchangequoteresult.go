package shared

// GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup
// The cost associated with the Reserved Instance.
type GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup struct {
	HourlyPrice           map[string]interface{}
	RemainingTotalValue   map[string]interface{}
	RemainingUpfrontValue map[string]interface{}
}

// GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup
// The cost associated with the Reserved Instance.
type GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup struct {
	HourlyPrice           map[string]interface{}
	RemainingTotalValue   map[string]interface{}
	RemainingUpfrontValue map[string]interface{}
}

// GetReservedInstancesExchangeQuoteResult
// Contains the output of GetReservedInstancesExchangeQuote.
type GetReservedInstancesExchangeQuoteResult struct {
	CurrencyCode                        map[string]interface{}
	IsValidExchange                     map[string]interface{}
	OutputReservedInstancesWillExpireAt map[string]interface{}
	PaymentDue                          map[string]interface{}
	ReservedInstanceValueRollup         *GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup
	ReservedInstanceValueSet            map[string]interface{}
	TargetConfigurationValueRollup      *GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup
	TargetConfigurationValueSet         map[string]interface{}
	ValidationFailureReason             map[string]interface{}
}
