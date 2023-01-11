package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartActivityStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartActivityStreamActionEnum action;
    public PostStartActivityStreamQueryParams withAction(PostStartActivityStreamActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartActivityStreamVersionEnum version;
    public PostStartActivityStreamQueryParams withVersion(PostStartActivityStreamVersionEnum version) {
        this.version = version;
        return this;
    }
}