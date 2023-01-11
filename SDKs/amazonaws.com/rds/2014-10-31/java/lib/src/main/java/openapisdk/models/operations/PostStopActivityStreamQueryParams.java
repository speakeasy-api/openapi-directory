package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopActivityStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStopActivityStreamActionEnum action;
    public PostStopActivityStreamQueryParams withAction(PostStopActivityStreamActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStopActivityStreamVersionEnum version;
    public PostStopActivityStreamQueryParams withVersion(PostStopActivityStreamVersionEnum version) {
        this.version = version;
        return this;
    }
}