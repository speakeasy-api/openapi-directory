package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResetAddressAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResetAddressAttributeActionEnum action;
    public GetResetAddressAttributeQueryParams withAction(GetResetAddressAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AllocationId")
    public String allocationId;
    public GetResetAddressAttributeQueryParams withAllocationId(String allocationId) {
        this.allocationId = allocationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetResetAddressAttributeAttributeEnum attribute;
    public GetResetAddressAttributeQueryParams withAttribute(GetResetAddressAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetResetAddressAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResetAddressAttributeVersionEnum version;
    public GetResetAddressAttributeQueryParams withVersion(GetResetAddressAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}