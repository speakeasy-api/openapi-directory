package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetDashboardQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetDashboardActionEnum action;
    public PostGetDashboardQueryParams withAction(PostGetDashboardActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetDashboardVersionEnum version;
    public PostGetDashboardQueryParams withVersion(PostGetDashboardVersionEnum version) {
        this.version = version;
        return this;
    }
}