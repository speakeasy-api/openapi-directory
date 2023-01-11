package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListDashboardsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListDashboardsActionEnum action;
    public PostListDashboardsQueryParams withAction(PostListDashboardsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostListDashboardsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListDashboardsVersionEnum version;
    public PostListDashboardsQueryParams withVersion(PostListDashboardsVersionEnum version) {
        this.version = version;
        return this;
    }
}