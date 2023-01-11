package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateAddressActionEnum action;
    public PostDisassociateAddressQueryParams withAction(PostDisassociateAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateAddressVersionEnum version;
    public PostDisassociateAddressQueryParams withVersion(PostDisassociateAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}