package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyDefaultCreditSpecificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyDefaultCreditSpecificationActionEnum action;
    public GetModifyDefaultCreditSpecificationQueryParams withAction(GetModifyDefaultCreditSpecificationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CpuCredits")
    public String cpuCredits;
    public GetModifyDefaultCreditSpecificationQueryParams withCpuCredits(String cpuCredits) {
        this.cpuCredits = cpuCredits;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyDefaultCreditSpecificationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceFamily")
    public GetModifyDefaultCreditSpecificationInstanceFamilyEnum instanceFamily;
    public GetModifyDefaultCreditSpecificationQueryParams withInstanceFamily(GetModifyDefaultCreditSpecificationInstanceFamilyEnum instanceFamily) {
        this.instanceFamily = instanceFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyDefaultCreditSpecificationVersionEnum version;
    public GetModifyDefaultCreditSpecificationQueryParams withVersion(GetModifyDefaultCreditSpecificationVersionEnum version) {
        this.version = version;
        return this;
    }
}