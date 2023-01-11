package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeStorageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeStorageActionEnum action;
    public PostDescribeStorageQueryParams withAction(PostDescribeStorageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeStorageVersionEnum version;
    public PostDescribeStorageQueryParams withVersion(PostDescribeStorageVersionEnum version) {
        this.version = version;
        return this;
    }
}