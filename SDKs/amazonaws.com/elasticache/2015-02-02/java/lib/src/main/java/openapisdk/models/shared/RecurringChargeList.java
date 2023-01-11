package openapisdk.models.shared;



/**
 * RecurringChargeList
 * Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering.
**/
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