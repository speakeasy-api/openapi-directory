package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkInsightsPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteNetworkInsightsPathActionEnum action;
    public PostDeleteNetworkInsightsPathQueryParams withAction(PostDeleteNetworkInsightsPathActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteNetworkInsightsPathVersionEnum version;
    public PostDeleteNetworkInsightsPathQueryParams withVersion(PostDeleteNetworkInsightsPathVersionEnum version) {
        this.version = version;
        return this;
    }
}