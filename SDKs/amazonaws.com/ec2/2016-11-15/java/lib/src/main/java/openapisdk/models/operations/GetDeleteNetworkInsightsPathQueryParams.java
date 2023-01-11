package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteNetworkInsightsPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteNetworkInsightsPathActionEnum action;
    public GetDeleteNetworkInsightsPathQueryParams withAction(GetDeleteNetworkInsightsPathActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteNetworkInsightsPathQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInsightsPathId")
    public String networkInsightsPathId;
    public GetDeleteNetworkInsightsPathQueryParams withNetworkInsightsPathId(String networkInsightsPathId) {
        this.networkInsightsPathId = networkInsightsPathId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteNetworkInsightsPathVersionEnum version;
    public GetDeleteNetworkInsightsPathQueryParams withVersion(GetDeleteNetworkInsightsPathVersionEnum version) {
        this.version = version;
        return this;
    }
}