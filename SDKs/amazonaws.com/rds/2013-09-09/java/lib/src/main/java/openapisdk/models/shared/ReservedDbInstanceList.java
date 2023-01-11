package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class ReservedDbInstanceList {
    public String currencyCode;
    public ReservedDbInstanceList withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    public String dbInstanceClass;
    public ReservedDbInstanceList withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    public Long dbInstanceCount;
    public ReservedDbInstanceList withDbInstanceCount(Long dbInstanceCount) {
        this.dbInstanceCount = dbInstanceCount;
        return this;
    }
    public Long duration;
    public ReservedDbInstanceList withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    public Double fixedPrice;
    public ReservedDbInstanceList withFixedPrice(Double fixedPrice) {
        this.fixedPrice = fixedPrice;
        return this;
    }
    public Boolean multiAZ;
    public ReservedDbInstanceList withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public String offeringType;
    public ReservedDbInstanceList withOfferingType(String offeringType) {
        this.offeringType = offeringType;
        return this;
    }
    public String productDescription;
    public ReservedDbInstanceList withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    public RecurringChargeList[] recurringCharges;
    public ReservedDbInstanceList withRecurringCharges(RecurringChargeList[] recurringCharges) {
        this.recurringCharges = recurringCharges;
        return this;
    }
    public String reservedDBInstanceId;
    public ReservedDbInstanceList withReservedDbInstanceId(String reservedDBInstanceId) {
        this.reservedDBInstanceId = reservedDBInstanceId;
        return this;
    }
    public String reservedDBInstancesOfferingId;
    public ReservedDbInstanceList withReservedDbInstancesOfferingId(String reservedDBInstancesOfferingId) {
        this.reservedDBInstancesOfferingId = reservedDBInstancesOfferingId;
        return this;
    }
    public OffsetDateTime startTime;
    public ReservedDbInstanceList withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    public String state;
    public ReservedDbInstanceList withState(String state) {
        this.state = state;
        return this;
    }
    public Double usagePrice;
    public ReservedDbInstanceList withUsagePrice(Double usagePrice) {
        this.usagePrice = usagePrice;
        return this;
    }
}