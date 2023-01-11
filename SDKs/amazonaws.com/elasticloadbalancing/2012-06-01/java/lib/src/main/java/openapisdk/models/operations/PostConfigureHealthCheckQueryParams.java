package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConfigureHealthCheckQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostConfigureHealthCheckActionEnum action;
    public PostConfigureHealthCheckQueryParams withAction(PostConfigureHealthCheckActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostConfigureHealthCheckVersionEnum version;
    public PostConfigureHealthCheckQueryParams withVersion(PostConfigureHealthCheckVersionEnum version) {
        this.version = version;
        return this;
    }
}