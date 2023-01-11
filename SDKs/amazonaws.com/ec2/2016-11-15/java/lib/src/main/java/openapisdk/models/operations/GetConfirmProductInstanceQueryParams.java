package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfirmProductInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetConfirmProductInstanceActionEnum action;
    public GetConfirmProductInstanceQueryParams withAction(GetConfirmProductInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetConfirmProductInstanceQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetConfirmProductInstanceQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProductCode")
    public String productCode;
    public GetConfirmProductInstanceQueryParams withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetConfirmProductInstanceVersionEnum version;
    public GetConfirmProductInstanceQueryParams withVersion(GetConfirmProductInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}