package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetListingsByDealerListingsByDateGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealerID")
    public Long dealerID;
    public GetListingsByDealerListingsByDateGetQueryParams withDealerId(Long dealerID) {
        this.dealerID = dealerID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public GetListingsByDealerListingsByDateGetQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetListingsByDealerListingsByDateGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newCars")
    public Boolean newCars;
    public GetListingsByDealerListingsByDateGetQueryParams withNewCars(Boolean newCars) {
        this.newCars = newCars;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetListingsByDealerListingsByDateGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public GetListingsByDealerListingsByDateGetQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}