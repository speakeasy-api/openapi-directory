package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableEbsEncryptionByDefaultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableEbsEncryptionByDefaultActionEnum action;
    public GetEnableEbsEncryptionByDefaultQueryParams withAction(GetEnableEbsEncryptionByDefaultActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetEnableEbsEncryptionByDefaultQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableEbsEncryptionByDefaultVersionEnum version;
    public GetEnableEbsEncryptionByDefaultQueryParams withVersion(GetEnableEbsEncryptionByDefaultVersionEnum version) {
        this.version = version;
        return this;
    }
}