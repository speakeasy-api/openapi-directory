package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListQueueTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListQueueTagsActionEnum action;
    public GetListQueueTagsQueryParams withAction(GetListQueueTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListQueueTagsVersionEnum version;
    public GetListQueueTagsQueryParams withVersion(GetListQueueTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}