package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class ReservedDbInstance {
    public String currencyCode;
    public ReservedDbInstance withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    public String dbInstanceClass;
    public ReservedDbInstance withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    public Long dbInstanceCount;
    public ReservedDbInstance withDbInstanceCount(Long dbInstanceCount) {
        this.dbInstanceCount = dbInstanceCount;
        return this;
    }
    public Long duration;
    public ReservedDbInstance withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    public Double fixedPrice;
    public ReservedDbInstance withFixedPrice(Double fixedPrice) {
        this.fixedPrice = fixedPrice;
        return this;
    }
    public Boolean multiAZ;
    public ReservedDbInstance withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public String offeringType;
    public ReservedDbInstance withOfferingType(String offeringType) {
        this.offeringType = offeringType;
        return this;
    }
    public String productDescription;
    public ReservedDbInstance withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    public RecurringChargeList[] recurringCharges;
    public ReservedDbInstance withRecurringCharges(RecurringChargeList[] recurringCharges) {
        this.recurringCharges = recurringCharges;
        return this;
    }
    public String reservedDBInstanceId;
    public ReservedDbInstance withReservedDbInstanceId(String reservedDBInstanceId) {
        this.reservedDBInstanceId = reservedDBInstanceId;
        return this;
    }
    public String reservedDBInstancesOfferingId;
    public ReservedDbInstance withReservedDbInstancesOfferingId(String reservedDBInstancesOfferingId) {
        this.reservedDBInstancesOfferingId = reservedDBInstancesOfferingId;
        return this;
    }
    public OffsetDateTime startTime;
    public ReservedDbInstance withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    public String state;
    public ReservedDbInstance withState(String state) {
        this.state = state;
        return this;
    }
    public Double usagePrice;
    public ReservedDbInstance withUsagePrice(Double usagePrice) {
        this.usagePrice = usagePrice;
        return this;
    }
}