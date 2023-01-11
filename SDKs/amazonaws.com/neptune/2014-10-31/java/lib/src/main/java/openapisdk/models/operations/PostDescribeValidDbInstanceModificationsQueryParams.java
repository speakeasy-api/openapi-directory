package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeValidDbInstanceModificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeValidDbInstanceModificationsActionEnum action;
    public PostDescribeValidDbInstanceModificationsQueryParams withAction(PostDescribeValidDbInstanceModificationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeValidDbInstanceModificationsVersionEnum version;
    public PostDescribeValidDbInstanceModificationsQueryParams withVersion(PostDescribeValidDbInstanceModificationsVersionEnum version) {
        this.version = version;
        return this;
    }
}