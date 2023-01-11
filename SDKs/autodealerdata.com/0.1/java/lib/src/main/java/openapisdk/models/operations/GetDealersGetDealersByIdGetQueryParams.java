package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealersGetDealersByIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealerID")
    public Long dealerID;
    public GetDealersGetDealersByIdGetQueryParams withDealerId(Long dealerID) {
        this.dealerID = dealerID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetDealersGetDealersByIdGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
}