package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateAddressActionEnum action;
    public PostAssociateAddressQueryParams withAction(PostAssociateAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateAddressVersionEnum version;
    public PostAssociateAddressQueryParams withVersion(PostAssociateAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}