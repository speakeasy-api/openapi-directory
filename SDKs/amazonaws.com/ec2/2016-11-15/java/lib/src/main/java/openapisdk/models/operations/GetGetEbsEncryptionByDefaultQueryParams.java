package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetEbsEncryptionByDefaultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetEbsEncryptionByDefaultActionEnum action;
    public GetGetEbsEncryptionByDefaultQueryParams withAction(GetGetEbsEncryptionByDefaultActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetEbsEncryptionByDefaultQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetEbsEncryptionByDefaultVersionEnum version;
    public GetGetEbsEncryptionByDefaultQueryParams withVersion(GetGetEbsEncryptionByDefaultVersionEnum version) {
        this.version = version;
        return this;
    }
}