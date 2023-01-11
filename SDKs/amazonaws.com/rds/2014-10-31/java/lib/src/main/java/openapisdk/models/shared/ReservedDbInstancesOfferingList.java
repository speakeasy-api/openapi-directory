package openapisdk.models.shared;



/**
 * ReservedDbInstancesOfferingList
 *  This data type is used as a response element in the <code>DescribeReservedDBInstancesOfferings</code> action. 
**/
public class ReservedDbInstancesOfferingList {
    public String currencyCode;
    public ReservedDbInstancesOfferingList withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    public String dbInstanceClass;
    public ReservedDbInstancesOfferingList withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    public Long duration;
    public ReservedDbInstancesOfferingList withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    public Double fixedPrice;
    public ReservedDbInstancesOfferingList withFixedPrice(Double fixedPrice) {
        this.fixedPrice = fixedPrice;
        return this;
    }
    public Boolean multiAZ;
    public ReservedDbInstancesOfferingList withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public String offeringType;
    public ReservedDbInstancesOfferingList withOfferingType(String offeringType) {
        this.offeringType = offeringType;
        return this;
    }
    public String productDescription;
    public ReservedDbInstancesOfferingList withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    public RecurringChargeList[] recurringCharges;
    public ReservedDbInstancesOfferingList withRecurringCharges(RecurringChargeList[] recurringCharges) {
        this.recurringCharges = recurringCharges;
        return this;
    }
    public String reservedDBInstancesOfferingId;
    public ReservedDbInstancesOfferingList withReservedDbInstancesOfferingId(String reservedDBInstancesOfferingId) {
        this.reservedDBInstancesOfferingId = reservedDBInstancesOfferingId;
        return this;
    }
    public Double usagePrice;
    public ReservedDbInstancesOfferingList withUsagePrice(Double usagePrice) {
        this.usagePrice = usagePrice;
        return this;
    }
}