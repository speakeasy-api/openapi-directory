package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetEbsDefaultKmsKeyIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetEbsDefaultKmsKeyIdActionEnum action;
    public GetGetEbsDefaultKmsKeyIdQueryParams withAction(GetGetEbsDefaultKmsKeyIdActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetEbsDefaultKmsKeyIdQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetEbsDefaultKmsKeyIdVersionEnum version;
    public GetGetEbsDefaultKmsKeyIdQueryParams withVersion(GetGetEbsDefaultKmsKeyIdVersionEnum version) {
        this.version = version;
        return this;
    }
}