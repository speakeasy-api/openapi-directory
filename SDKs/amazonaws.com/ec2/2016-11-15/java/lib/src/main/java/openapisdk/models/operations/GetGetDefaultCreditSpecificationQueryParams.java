package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetDefaultCreditSpecificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetDefaultCreditSpecificationActionEnum action;
    public GetGetDefaultCreditSpecificationQueryParams withAction(GetGetDefaultCreditSpecificationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetDefaultCreditSpecificationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceFamily")
    public GetGetDefaultCreditSpecificationInstanceFamilyEnum instanceFamily;
    public GetGetDefaultCreditSpecificationQueryParams withInstanceFamily(GetGetDefaultCreditSpecificationInstanceFamilyEnum instanceFamily) {
        this.instanceFamily = instanceFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetDefaultCreditSpecificationVersionEnum version;
    public GetGetDefaultCreditSpecificationQueryParams withVersion(GetGetDefaultCreditSpecificationVersionEnum version) {
        this.version = version;
        return this;
    }
}