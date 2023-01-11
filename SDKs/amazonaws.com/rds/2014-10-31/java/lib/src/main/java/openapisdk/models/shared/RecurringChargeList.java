package openapisdk.models.shared;



/**
 * RecurringChargeList
 *  This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions. 
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