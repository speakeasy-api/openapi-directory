package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeauthorizeDataShareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeauthorizeDataShareActionEnum action;
    public PostDeauthorizeDataShareQueryParams withAction(PostDeauthorizeDataShareActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeauthorizeDataShareVersionEnum version;
    public PostDeauthorizeDataShareQueryParams withVersion(PostDeauthorizeDataShareVersionEnum version) {
        this.version = version;
        return this;
    }
}