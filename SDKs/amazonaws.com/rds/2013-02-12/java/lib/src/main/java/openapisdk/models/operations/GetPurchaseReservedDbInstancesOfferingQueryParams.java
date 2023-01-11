package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPurchaseReservedDbInstancesOfferingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPurchaseReservedDbInstancesOfferingActionEnum action;
    public GetPurchaseReservedDbInstancesOfferingQueryParams withAction(GetPurchaseReservedDbInstancesOfferingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceCount")
    public Long dbInstanceCount;
    public GetPurchaseReservedDbInstancesOfferingQueryParams withDbInstanceCount(Long dbInstanceCount) {
        this.dbInstanceCount = dbInstanceCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedDBInstanceId")
    public String reservedDBInstanceId;
    public GetPurchaseReservedDbInstancesOfferingQueryParams withReservedDbInstanceId(String reservedDBInstanceId) {
        this.reservedDBInstanceId = reservedDBInstanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedDBInstancesOfferingId")
    public String reservedDBInstancesOfferingId;
    public GetPurchaseReservedDbInstancesOfferingQueryParams withReservedDbInstancesOfferingId(String reservedDBInstancesOfferingId) {
        this.reservedDBInstancesOfferingId = reservedDBInstancesOfferingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPurchaseReservedDbInstancesOfferingVersionEnum version;
    public GetPurchaseReservedDbInstancesOfferingQueryParams withVersion(GetPurchaseReservedDbInstancesOfferingVersionEnum version) {
        this.version = version;
        return this;
    }
}