package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeStorageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeStorageActionEnum action;
    public GetDescribeStorageQueryParams withAction(GetDescribeStorageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeStorageVersionEnum version;
    public GetDescribeStorageQueryParams withVersion(GetDescribeStorageVersionEnum version) {
        this.version = version;
        return this;
    }
}