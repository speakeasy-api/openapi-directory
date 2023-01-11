package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDashboardsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDashboardsActionEnum action;
    public PostDeleteDashboardsQueryParams withAction(PostDeleteDashboardsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDashboardsVersionEnum version;
    public PostDeleteDashboardsQueryParams withVersion(PostDeleteDashboardsVersionEnum version) {
        this.version = version;
        return this;
    }
}