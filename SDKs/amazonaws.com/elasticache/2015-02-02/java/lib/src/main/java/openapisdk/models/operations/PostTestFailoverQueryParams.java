package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTestFailoverQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTestFailoverActionEnum action;
    public PostTestFailoverQueryParams withAction(PostTestFailoverActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTestFailoverVersionEnum version;
    public PostTestFailoverQueryParams withVersion(PostTestFailoverVersionEnum version) {
        this.version = version;
        return this;
    }
}