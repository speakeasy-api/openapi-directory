package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteKeyPairQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteKeyPairActionEnum action;
    public GetDeleteKeyPairQueryParams withAction(GetDeleteKeyPairActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteKeyPairQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=KeyName")
    public String keyName;
    public GetDeleteKeyPairQueryParams withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=KeyPairId")
    public String keyPairId;
    public GetDeleteKeyPairQueryParams withKeyPairId(String keyPairId) {
        this.keyPairId = keyPairId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteKeyPairVersionEnum version;
    public GetDeleteKeyPairQueryParams withVersion(GetDeleteKeyPairVersionEnum version) {
        this.version = version;
        return this;
    }
}