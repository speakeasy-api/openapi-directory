package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyAddressAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyAddressAttributeActionEnum action;
    public GetModifyAddressAttributeQueryParams withAction(GetModifyAddressAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AllocationId")
    public String allocationId;
    public GetModifyAddressAttributeQueryParams withAllocationId(String allocationId) {
        this.allocationId = allocationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetModifyAddressAttributeQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyAddressAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyAddressAttributeVersionEnum version;
    public GetModifyAddressAttributeQueryParams withVersion(GetModifyAddressAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}