package openapisdk.models.shared;



/**
 * GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup
 * The cost associated with the Reserved Instance.
**/
public class GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup {
    public java.util.Map<String, Object> hourlyPrice;
    public GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup withHourlyPrice(java.util.Map<String, Object> hourlyPrice) {
        this.hourlyPrice = hourlyPrice;
        return this;
    }
    public java.util.Map<String, Object> remainingTotalValue;
    public GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup withRemainingTotalValue(java.util.Map<String, Object> remainingTotalValue) {
        this.remainingTotalValue = remainingTotalValue;
        return this;
    }
    public java.util.Map<String, Object> remainingUpfrontValue;
    public GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup withRemainingUpfrontValue(java.util.Map<String, Object> remainingUpfrontValue) {
        this.remainingUpfrontValue = remainingUpfrontValue;
        return this;
    }
}