package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbParameterGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbParameterGroupsActionEnum action;
    public PostDescribeDbParameterGroupsQueryParams withAction(PostDescribeDbParameterGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbParameterGroupsVersionEnum version;
    public PostDescribeDbParameterGroupsQueryParams withVersion(PostDescribeDbParameterGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}