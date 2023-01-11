package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedInstancesModificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReservedInstancesModificationsActionEnum action;
    public PostDescribeReservedInstancesModificationsQueryParams withAction(PostDescribeReservedInstancesModificationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeReservedInstancesModificationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReservedInstancesModificationsVersionEnum version;
    public PostDescribeReservedInstancesModificationsQueryParams withVersion(PostDescribeReservedInstancesModificationsVersionEnum version) {
        this.version = version;
        return this;
    }
}