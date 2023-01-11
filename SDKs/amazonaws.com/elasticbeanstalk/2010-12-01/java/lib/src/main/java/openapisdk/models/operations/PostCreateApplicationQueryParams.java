package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateApplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateApplicationActionEnum action;
    public PostCreateApplicationQueryParams withAction(PostCreateApplicationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateApplicationVersionEnum version;
    public PostCreateApplicationQueryParams withVersion(PostCreateApplicationVersionEnum version) {
        this.version = version;
        return this;
    }
}