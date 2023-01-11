package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotFleetRequestHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSpotFleetRequestHistoryActionEnum action;
    public PostDescribeSpotFleetRequestHistoryQueryParams withAction(PostDescribeSpotFleetRequestHistoryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSpotFleetRequestHistoryVersionEnum version;
    public PostDescribeSpotFleetRequestHistoryQueryParams withVersion(PostDescribeSpotFleetRequestHistoryVersionEnum version) {
        this.version = version;
        return this;
    }
}