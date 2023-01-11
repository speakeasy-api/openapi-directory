package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkInsightsAnalysisQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteNetworkInsightsAnalysisActionEnum action;
    public PostDeleteNetworkInsightsAnalysisQueryParams withAction(PostDeleteNetworkInsightsAnalysisActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteNetworkInsightsAnalysisVersionEnum version;
    public PostDeleteNetworkInsightsAnalysisQueryParams withVersion(PostDeleteNetworkInsightsAnalysisVersionEnum version) {
        this.version = version;
        return this;
    }
}