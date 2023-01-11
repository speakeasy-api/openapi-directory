package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAddressesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAddressesActionEnum action;
    public PostDescribeAddressesQueryParams withAction(PostDescribeAddressesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAddressesVersionEnum version;
    public PostDescribeAddressesQueryParams withVersion(PostDescribeAddressesVersionEnum version) {
        this.version = version;
        return this;
    }
}