package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResetEbsDefaultKmsKeyIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResetEbsDefaultKmsKeyIdActionEnum action;
    public GetResetEbsDefaultKmsKeyIdQueryParams withAction(GetResetEbsDefaultKmsKeyIdActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetResetEbsDefaultKmsKeyIdQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResetEbsDefaultKmsKeyIdVersionEnum version;
    public GetResetEbsDefaultKmsKeyIdQueryParams withVersion(GetResetEbsDefaultKmsKeyIdVersionEnum version) {
        this.version = version;
        return this;
    }
}