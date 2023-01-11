package openapisdk.models.shared;



/**
 * GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup
 * The cost associated with the Reserved Instance.
**/
public class GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup {
    public java.util.Map<String, Object> hourlyPrice;
    public GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup withHourlyPrice(java.util.Map<String, Object> hourlyPrice) {
        this.hourlyPrice = hourlyPrice;
        return this;
    }
    public java.util.Map<String, Object> remainingTotalValue;
    public GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup withRemainingTotalValue(java.util.Map<String, Object> remainingTotalValue) {
        this.remainingTotalValue = remainingTotalValue;
        return this;
    }
    public java.util.Map<String, Object> remainingUpfrontValue;
    public GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup withRemainingUpfrontValue(java.util.Map<String, Object> remainingUpfrontValue) {
        this.remainingUpfrontValue = remainingUpfrontValue;
        return this;
    }
}