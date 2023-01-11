package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableImageDeprecationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableImageDeprecationActionEnum action;
    public GetEnableImageDeprecationQueryParams withAction(GetEnableImageDeprecationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeprecateAt")
    public OffsetDateTime deprecateAt;
    public GetEnableImageDeprecationQueryParams withDeprecateAt(OffsetDateTime deprecateAt) {
        this.deprecateAt = deprecateAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetEnableImageDeprecationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ImageId")
    public String imageId;
    public GetEnableImageDeprecationQueryParams withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableImageDeprecationVersionEnum version;
    public GetEnableImageDeprecationQueryParams withVersion(GetEnableImageDeprecationVersionEnum version) {
        this.version = version;
        return this;
    }
}