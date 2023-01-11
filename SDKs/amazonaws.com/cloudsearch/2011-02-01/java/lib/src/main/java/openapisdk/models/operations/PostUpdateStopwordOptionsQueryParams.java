package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateStopwordOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateStopwordOptionsActionEnum action;
    public PostUpdateStopwordOptionsQueryParams withAction(PostUpdateStopwordOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateStopwordOptionsVersionEnum version;
    public PostUpdateStopwordOptionsQueryParams withVersion(PostUpdateStopwordOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}