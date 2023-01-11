package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetTagQueueActionEnum action;
    public GetTagQueueQueryParams withAction(GetTagQueueActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Tags")
    public java.util.Map<String, String> tags;
    public GetTagQueueQueryParams withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetTagQueueVersionEnum version;
    public GetTagQueueQueryParams withVersion(GetTagQueueVersionEnum version) {
        this.version = version;
        return this;
    }
}