package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListVerifiedEmailAddressesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListVerifiedEmailAddressesActionEnum action;
    public PostListVerifiedEmailAddressesQueryParams withAction(PostListVerifiedEmailAddressesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListVerifiedEmailAddressesVersionEnum version;
    public PostListVerifiedEmailAddressesQueryParams withVersion(PostListVerifiedEmailAddressesVersionEnum version) {
        this.version = version;
        return this;
    }
}