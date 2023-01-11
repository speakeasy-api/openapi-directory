package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableImageDeprecationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableImageDeprecationActionEnum action;
    public GetDisableImageDeprecationQueryParams withAction(GetDisableImageDeprecationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDisableImageDeprecationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ImageId")
    public String imageId;
    public GetDisableImageDeprecationQueryParams withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableImageDeprecationVersionEnum version;
    public GetDisableImageDeprecationQueryParams withVersion(GetDisableImageDeprecationVersionEnum version) {
        this.version = version;
        return this;
    }
}