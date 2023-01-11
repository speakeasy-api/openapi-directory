package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestartAppServerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestartAppServerActionEnum action;
    public PostRestartAppServerQueryParams withAction(PostRestartAppServerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestartAppServerVersionEnum version;
    public PostRestartAppServerQueryParams withVersion(PostRestartAppServerVersionEnum version) {
        this.version = version;
        return this;
    }
}