package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVerifiedEmailAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVerifiedEmailAddressActionEnum action;
    public PostDeleteVerifiedEmailAddressQueryParams withAction(PostDeleteVerifiedEmailAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVerifiedEmailAddressVersionEnum version;
    public PostDeleteVerifiedEmailAddressQueryParams withVersion(PostDeleteVerifiedEmailAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}