package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeReservedDbInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeReservedDbInstancesActionEnum action;
    public GetDescribeReservedDbInstancesQueryParams withAction(GetDescribeReservedDbInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceClass")
    public String dbInstanceClass;
    public GetDescribeReservedDbInstancesQueryParams withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Duration")
    public String duration;
    public GetDescribeReservedDbInstancesQueryParams withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeReservedDbInstancesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeReservedDbInstancesQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MultiAZ")
    public Boolean multiAZ;
    public GetDescribeReservedDbInstancesQueryParams withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OfferingType")
    public String offeringType;
    public GetDescribeReservedDbInstancesQueryParams withOfferingType(String offeringType) {
        this.offeringType = offeringType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProductDescription")
    public String productDescription;
    public GetDescribeReservedDbInstancesQueryParams withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedDBInstanceId")
    public String reservedDBInstanceId;
    public GetDescribeReservedDbInstancesQueryParams withReservedDbInstanceId(String reservedDBInstanceId) {
        this.reservedDBInstanceId = reservedDBInstanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedDBInstancesOfferingId")
    public String reservedDBInstancesOfferingId;
    public GetDescribeReservedDbInstancesQueryParams withReservedDbInstancesOfferingId(String reservedDBInstancesOfferingId) {
        this.reservedDBInstancesOfferingId = reservedDBInstancesOfferingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeReservedDbInstancesVersionEnum version;
    public GetDescribeReservedDbInstancesQueryParams withVersion(GetDescribeReservedDbInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}