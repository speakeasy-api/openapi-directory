package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRestoreAddressToClassicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRestoreAddressToClassicActionEnum action;
    public GetRestoreAddressToClassicQueryParams withAction(GetRestoreAddressToClassicActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetRestoreAddressToClassicQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PublicIp")
    public String publicIp;
    public GetRestoreAddressToClassicQueryParams withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRestoreAddressToClassicVersionEnum version;
    public GetRestoreAddressToClassicQueryParams withVersion(GetRestoreAddressToClassicVersionEnum version) {
        this.version = version;
        return this;
    }
}