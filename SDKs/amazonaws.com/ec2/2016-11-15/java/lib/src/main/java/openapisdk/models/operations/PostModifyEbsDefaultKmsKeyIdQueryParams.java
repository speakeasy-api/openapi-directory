package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyEbsDefaultKmsKeyIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyEbsDefaultKmsKeyIdActionEnum action;
    public PostModifyEbsDefaultKmsKeyIdQueryParams withAction(PostModifyEbsDefaultKmsKeyIdActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyEbsDefaultKmsKeyIdVersionEnum version;
    public PostModifyEbsDefaultKmsKeyIdQueryParams withVersion(PostModifyEbsDefaultKmsKeyIdVersionEnum version) {
        this.version = version;
        return this;
    }
}