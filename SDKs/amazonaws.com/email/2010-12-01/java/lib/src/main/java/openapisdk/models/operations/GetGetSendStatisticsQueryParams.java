package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetSendStatisticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetSendStatisticsActionEnum action;
    public GetGetSendStatisticsQueryParams withAction(GetGetSendStatisticsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetSendStatisticsVersionEnum version;
    public GetGetSendStatisticsQueryParams withVersion(GetGetSendStatisticsVersionEnum version) {
        this.version = version;
        return this;
    }
}