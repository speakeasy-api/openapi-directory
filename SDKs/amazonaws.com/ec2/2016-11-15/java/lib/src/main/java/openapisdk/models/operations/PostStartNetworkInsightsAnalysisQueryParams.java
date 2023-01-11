package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartNetworkInsightsAnalysisQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartNetworkInsightsAnalysisActionEnum action;
    public PostStartNetworkInsightsAnalysisQueryParams withAction(PostStartNetworkInsightsAnalysisActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartNetworkInsightsAnalysisVersionEnum version;
    public PostStartNetworkInsightsAnalysisQueryParams withVersion(PostStartNetworkInsightsAnalysisVersionEnum version) {
        this.version = version;
        return this;
    }
}