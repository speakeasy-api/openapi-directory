package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNetworkInsightsPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateNetworkInsightsPathActionEnum action;
    public PostCreateNetworkInsightsPathQueryParams withAction(PostCreateNetworkInsightsPathActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateNetworkInsightsPathVersionEnum version;
    public PostCreateNetworkInsightsPathQueryParams withVersion(PostCreateNetworkInsightsPathVersionEnum version) {
        this.version = version;
        return this;
    }
}