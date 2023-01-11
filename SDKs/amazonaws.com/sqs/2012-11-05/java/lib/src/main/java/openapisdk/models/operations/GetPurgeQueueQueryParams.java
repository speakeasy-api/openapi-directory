package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPurgeQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPurgeQueueActionEnum action;
    public GetPurgeQueueQueryParams withAction(GetPurgeQueueActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPurgeQueueVersionEnum version;
    public GetPurgeQueueQueryParams withVersion(GetPurgeQueueVersionEnum version) {
        this.version = version;
        return this;
    }
}