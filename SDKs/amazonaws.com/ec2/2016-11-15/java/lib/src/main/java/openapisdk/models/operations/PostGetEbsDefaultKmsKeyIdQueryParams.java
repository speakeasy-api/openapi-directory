package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetEbsDefaultKmsKeyIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetEbsDefaultKmsKeyIdActionEnum action;
    public PostGetEbsDefaultKmsKeyIdQueryParams withAction(PostGetEbsDefaultKmsKeyIdActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetEbsDefaultKmsKeyIdVersionEnum version;
    public PostGetEbsDefaultKmsKeyIdQueryParams withVersion(PostGetEbsDefaultKmsKeyIdVersionEnum version) {
        this.version = version;
        return this;
    }
}