package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteQueueActionEnum action;
    public GetDeleteQueueQueryParams withAction(GetDeleteQueueActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteQueueVersionEnum version;
    public GetDeleteQueueQueryParams withVersion(GetDeleteQueueVersionEnum version) {
        this.version = version;
        return this;
    }
}