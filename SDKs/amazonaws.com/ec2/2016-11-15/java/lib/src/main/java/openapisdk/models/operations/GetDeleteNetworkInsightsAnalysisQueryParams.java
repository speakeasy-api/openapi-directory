package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteNetworkInsightsAnalysisQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteNetworkInsightsAnalysisActionEnum action;
    public GetDeleteNetworkInsightsAnalysisQueryParams withAction(GetDeleteNetworkInsightsAnalysisActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteNetworkInsightsAnalysisQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInsightsAnalysisId")
    public String networkInsightsAnalysisId;
    public GetDeleteNetworkInsightsAnalysisQueryParams withNetworkInsightsAnalysisId(String networkInsightsAnalysisId) {
        this.networkInsightsAnalysisId = networkInsightsAnalysisId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteNetworkInsightsAnalysisVersionEnum version;
    public GetDeleteNetworkInsightsAnalysisQueryParams withVersion(GetDeleteNetworkInsightsAnalysisVersionEnum version) {
        this.version = version;
        return this;
    }
}