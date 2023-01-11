package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableEbsEncryptionByDefaultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableEbsEncryptionByDefaultActionEnum action;
    public GetDisableEbsEncryptionByDefaultQueryParams withAction(GetDisableEbsEncryptionByDefaultActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDisableEbsEncryptionByDefaultQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableEbsEncryptionByDefaultVersionEnum version;
    public GetDisableEbsEncryptionByDefaultQueryParams withVersion(GetDisableEbsEncryptionByDefaultVersionEnum version) {
        this.version = version;
        return this;
    }
}