package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFleetHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeFleetHistoryActionEnum action;
    public PostDescribeFleetHistoryQueryParams withAction(PostDescribeFleetHistoryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeFleetHistoryVersionEnum version;
    public PostDescribeFleetHistoryQueryParams withVersion(PostDescribeFleetHistoryVersionEnum version) {
        this.version = version;
        return this;
    }
}