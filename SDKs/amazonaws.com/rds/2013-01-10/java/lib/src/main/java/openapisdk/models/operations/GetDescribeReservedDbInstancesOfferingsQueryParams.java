package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeReservedDbInstancesOfferingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeReservedDbInstancesOfferingsActionEnum action;
    public GetDescribeReservedDbInstancesOfferingsQueryParams withAction(GetDescribeReservedDbInstancesOfferingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceClass")
    public String dbInstanceClass;
    public GetDescribeReservedDbInstancesOfferingsQueryParams withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Duration")
    public String duration;
    public GetDescribeReservedDbInstancesOfferingsQueryParams withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeReservedDbInstancesOfferingsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeReservedDbInstancesOfferingsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MultiAZ")
    public Boolean multiAZ;
    public GetDescribeReservedDbInstancesOfferingsQueryParams withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OfferingType")
    public String offeringType;
    public GetDescribeReservedDbInstancesOfferingsQueryParams withOfferingType(String offeringType) {
        this.offeringType = offeringType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProductDescription")
    public String productDescription;
    public GetDescribeReservedDbInstancesOfferingsQueryParams withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedDBInstancesOfferingId")
    public String reservedDBInstancesOfferingId;
    public GetDescribeReservedDbInstancesOfferingsQueryParams withReservedDbInstancesOfferingId(String reservedDBInstancesOfferingId) {
        this.reservedDBInstancesOfferingId = reservedDBInstancesOfferingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeReservedDbInstancesOfferingsVersionEnum version;
    public GetDescribeReservedDbInstancesOfferingsQueryParams withVersion(GetDescribeReservedDbInstancesOfferingsVersionEnum version) {
        this.version = version;
        return this;
    }
}