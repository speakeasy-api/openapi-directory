package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealersGetDealersGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetDealersGetDealersGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zipCode")
    public Long zipCode;
    public GetDealersGetDealersGetQueryParams withZipCode(Long zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}