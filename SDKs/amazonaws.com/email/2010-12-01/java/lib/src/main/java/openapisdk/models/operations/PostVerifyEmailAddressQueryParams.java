package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVerifyEmailAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostVerifyEmailAddressActionEnum action;
    public PostVerifyEmailAddressQueryParams withAction(PostVerifyEmailAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostVerifyEmailAddressVersionEnum version;
    public PostVerifyEmailAddressQueryParams withVersion(PostVerifyEmailAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}