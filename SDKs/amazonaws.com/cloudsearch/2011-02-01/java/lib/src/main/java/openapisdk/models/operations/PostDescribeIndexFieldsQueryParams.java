package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeIndexFieldsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeIndexFieldsActionEnum action;
    public PostDescribeIndexFieldsQueryParams withAction(PostDescribeIndexFieldsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeIndexFieldsVersionEnum version;
    public PostDescribeIndexFieldsQueryParams withVersion(PostDescribeIndexFieldsVersionEnum version) {
        this.version = version;
        return this;
    }
}