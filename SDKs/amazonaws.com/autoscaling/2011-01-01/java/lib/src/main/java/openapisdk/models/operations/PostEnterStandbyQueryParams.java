package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnterStandbyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnterStandbyActionEnum action;
    public PostEnterStandbyQueryParams withAction(PostEnterStandbyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnterStandbyVersionEnum version;
    public PostEnterStandbyQueryParams withVersion(PostEnterStandbyVersionEnum version) {
        this.version = version;
        return this;
    }
}