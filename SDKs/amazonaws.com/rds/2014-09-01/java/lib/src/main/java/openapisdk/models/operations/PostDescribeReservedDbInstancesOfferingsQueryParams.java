package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedDbInstancesOfferingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReservedDbInstancesOfferingsActionEnum action;
    public PostDescribeReservedDbInstancesOfferingsQueryParams withAction(PostDescribeReservedDbInstancesOfferingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReservedDbInstancesOfferingsVersionEnum version;
    public PostDescribeReservedDbInstancesOfferingsQueryParams withVersion(PostDescribeReservedDbInstancesOfferingsVersionEnum version) {
        this.version = version;
        return this;
    }
}