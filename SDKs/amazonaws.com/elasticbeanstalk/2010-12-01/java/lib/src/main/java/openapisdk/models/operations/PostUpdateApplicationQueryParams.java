package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateApplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateApplicationActionEnum action;
    public PostUpdateApplicationQueryParams withAction(PostUpdateApplicationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateApplicationVersionEnum version;
    public PostUpdateApplicationQueryParams withVersion(PostUpdateApplicationVersionEnum version) {
        this.version = version;
        return this;
    }
}