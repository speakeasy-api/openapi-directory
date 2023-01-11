package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSendStatisticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetSendStatisticsActionEnum action;
    public PostGetSendStatisticsQueryParams withAction(PostGetSendStatisticsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetSendStatisticsVersionEnum version;
    public PostGetSendStatisticsQueryParams withVersion(PostGetSendStatisticsVersionEnum version) {
        this.version = version;
        return this;
    }
}