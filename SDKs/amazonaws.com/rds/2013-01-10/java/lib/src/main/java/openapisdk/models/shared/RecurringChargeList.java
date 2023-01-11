package openapisdk.models.shared;



public class RecurringChargeList {
    public Double recurringChargeAmount;
    public RecurringChargeList withRecurringChargeAmount(Double recurringChargeAmount) {
        this.recurringChargeAmount = recurringChargeAmount;
        return this;
    }
    public String recurringChargeFrequency;
    public RecurringChargeList withRecurringChargeFrequency(String recurringChargeFrequency) {
        this.recurringChargeFrequency = recurringChargeFrequency;
        return this;
    }
}