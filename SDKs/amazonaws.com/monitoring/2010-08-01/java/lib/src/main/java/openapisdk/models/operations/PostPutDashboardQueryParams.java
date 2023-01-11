package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutDashboardQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutDashboardActionEnum action;
    public PostPutDashboardQueryParams withAction(PostPutDashboardActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutDashboardVersionEnum version;
    public PostPutDashboardQueryParams withVersion(PostPutDashboardVersionEnum version) {
        this.version = version;
        return this;
    }
}