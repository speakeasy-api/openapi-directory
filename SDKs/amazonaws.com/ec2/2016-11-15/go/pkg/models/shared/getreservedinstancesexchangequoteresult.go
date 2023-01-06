package shared

// GetReservedInstancesExchangeQuoteResult
// Contains the output of GetReservedInstancesExchangeQuote.
type GetReservedInstancesExchangeQuoteResult struct {
	CurrencyCode                        map[string]interface{}
	IsValidExchange                     map[string]interface{}
	OutputReservedInstancesWillExpireAt map[string]interface{}
	PaymentDue                          map[string]interface{}
	ReservedInstanceValueRollup         map[string]interface{}
	ReservedInstanceValueSet            map[string]interface{}
	TargetConfigurationValueRollup      map[string]interface{}
	TargetConfigurationValueSet         map[string]interface{}
	ValidationFailureReason             map[string]interface{}
}
