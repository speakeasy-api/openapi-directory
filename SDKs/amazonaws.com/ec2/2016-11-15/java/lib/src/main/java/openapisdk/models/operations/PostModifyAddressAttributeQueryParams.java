package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyAddressAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyAddressAttributeActionEnum action;
    public PostModifyAddressAttributeQueryParams withAction(PostModifyAddressAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyAddressAttributeVersionEnum version;
    public PostModifyAddressAttributeQueryParams withVersion(PostModifyAddressAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}