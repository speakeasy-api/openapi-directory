package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExitStandbyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostExitStandbyActionEnum action;
    public PostExitStandbyQueryParams withAction(PostExitStandbyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostExitStandbyVersionEnum version;
    public PostExitStandbyQueryParams withVersion(PostExitStandbyVersionEnum version) {
        this.version = version;
        return this;
    }
}