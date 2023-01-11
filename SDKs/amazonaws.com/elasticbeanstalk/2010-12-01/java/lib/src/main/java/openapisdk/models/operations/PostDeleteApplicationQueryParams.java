package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteApplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteApplicationActionEnum action;
    public PostDeleteApplicationQueryParams withAction(PostDeleteApplicationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteApplicationVersionEnum version;
    public PostDeleteApplicationQueryParams withVersion(PostDeleteApplicationVersionEnum version) {
        this.version = version;
        return this;
    }
}