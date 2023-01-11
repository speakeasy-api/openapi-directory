package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingsByDealerListingsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealerID")
    public Long dealerID;
    public GetListingsByDealerListingsGetQueryParams withDealerId(Long dealerID) {
        this.dealerID = dealerID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetListingsByDealerListingsGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newCars")
    public Boolean newCars;
    public GetListingsByDealerListingsGetQueryParams withNewCars(Boolean newCars) {
        this.newCars = newCars;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetListingsByDealerListingsGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
}