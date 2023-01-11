package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbSubnetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbSubnetGroupsActionEnum action;
    public PostDescribeDbSubnetGroupsQueryParams withAction(PostDescribeDbSubnetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbSubnetGroupsVersionEnum version;
    public PostDescribeDbSubnetGroupsQueryParams withVersion(PostDescribeDbSubnetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}