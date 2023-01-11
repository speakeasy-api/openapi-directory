package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeOptionGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeOptionGroupsActionEnum action;
    public PostDescribeOptionGroupsQueryParams withAction(PostDescribeOptionGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeOptionGroupsVersionEnum version;
    public PostDescribeOptionGroupsQueryParams withVersion(PostDescribeOptionGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}