package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListVerifiedEmailAddressesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListVerifiedEmailAddressesActionEnum action;
    public GetListVerifiedEmailAddressesQueryParams withAction(GetListVerifiedEmailAddressesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListVerifiedEmailAddressesVersionEnum version;
    public GetListVerifiedEmailAddressesQueryParams withVersion(GetListVerifiedEmailAddressesVersionEnum version) {
        this.version = version;
        return this;
    }
}