package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyEbsDefaultKmsKeyIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyEbsDefaultKmsKeyIdActionEnum action;
    public GetModifyEbsDefaultKmsKeyIdQueryParams withAction(GetModifyEbsDefaultKmsKeyIdActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyEbsDefaultKmsKeyIdQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=KmsKeyId")
    public String kmsKeyId;
    public GetModifyEbsDefaultKmsKeyIdQueryParams withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyEbsDefaultKmsKeyIdVersionEnum version;
    public GetModifyEbsDefaultKmsKeyIdQueryParams withVersion(GetModifyEbsDefaultKmsKeyIdVersionEnum version) {
        this.version = version;
        return this;
    }
}