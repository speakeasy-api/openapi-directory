package openapisdk.models.shared;



/**
 * GetReservedInstancesExchangeQuoteResult
 * Contains the output of GetReservedInstancesExchangeQuote.
**/
public class GetReservedInstancesExchangeQuoteResult {
    public java.util.Map<String, Object> currencyCode;
    public GetReservedInstancesExchangeQuoteResult withCurrencyCode(java.util.Map<String, Object> currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    public java.util.Map<String, Object> isValidExchange;
    public GetReservedInstancesExchangeQuoteResult withIsValidExchange(java.util.Map<String, Object> isValidExchange) {
        this.isValidExchange = isValidExchange;
        return this;
    }
    public java.util.Map<String, Object> outputReservedInstancesWillExpireAt;
    public GetReservedInstancesExchangeQuoteResult withOutputReservedInstancesWillExpireAt(java.util.Map<String, Object> outputReservedInstancesWillExpireAt) {
        this.outputReservedInstancesWillExpireAt = outputReservedInstancesWillExpireAt;
        return this;
    }
    public java.util.Map<String, Object> paymentDue;
    public GetReservedInstancesExchangeQuoteResult withPaymentDue(java.util.Map<String, Object> paymentDue) {
        this.paymentDue = paymentDue;
        return this;
    }
    public GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup reservedInstanceValueRollup;
    public GetReservedInstancesExchangeQuoteResult withReservedInstanceValueRollup(GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup reservedInstanceValueRollup) {
        this.reservedInstanceValueRollup = reservedInstanceValueRollup;
        return this;
    }
    public java.util.Map<String, Object> reservedInstanceValueSet;
    public GetReservedInstancesExchangeQuoteResult withReservedInstanceValueSet(java.util.Map<String, Object> reservedInstanceValueSet) {
        this.reservedInstanceValueSet = reservedInstanceValueSet;
        return this;
    }
    public GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup targetConfigurationValueRollup;
    public GetReservedInstancesExchangeQuoteResult withTargetConfigurationValueRollup(GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup targetConfigurationValueRollup) {
        this.targetConfigurationValueRollup = targetConfigurationValueRollup;
        return this;
    }
    public java.util.Map<String, Object> targetConfigurationValueSet;
    public GetReservedInstancesExchangeQuoteResult withTargetConfigurationValueSet(java.util.Map<String, Object> targetConfigurationValueSet) {
        this.targetConfigurationValueSet = targetConfigurationValueSet;
        return this;
    }
    public java.util.Map<String, Object> validationFailureReason;
    public GetReservedInstancesExchangeQuoteResult withValidationFailureReason(java.util.Map<String, Object> validationFailureReason) {
        this.validationFailureReason = validationFailureReason;
        return this;
    }
}