package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetEbsDefaultKmsKeyIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetEbsDefaultKmsKeyIdActionEnum action;
    public PostResetEbsDefaultKmsKeyIdQueryParams withAction(PostResetEbsDefaultKmsKeyIdActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetEbsDefaultKmsKeyIdVersionEnum version;
    public PostResetEbsDefaultKmsKeyIdQueryParams withVersion(PostResetEbsDefaultKmsKeyIdVersionEnum version) {
        this.version = version;
        return this;
    }
}