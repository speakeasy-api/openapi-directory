package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAvailabilityOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAvailabilityOptionsActionEnum action;
    public PostDescribeAvailabilityOptionsQueryParams withAction(PostDescribeAvailabilityOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAvailabilityOptionsVersionEnum version;
    public PostDescribeAvailabilityOptionsQueryParams withVersion(PostDescribeAvailabilityOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}