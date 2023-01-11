package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetListings2Listings2GetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public GetListings2Listings2GetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=daysBack")
    public Long daysBack;
    public GetListings2Listings2GetQueryParams withDaysBack(Long daysBack) {
        this.daysBack = daysBack;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealerID")
    public Long dealerID;
    public GetListings2Listings2GetQueryParams withDealerId(Long dealerID) {
        this.dealerID = dealerID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public GetListings2Listings2GetQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extendedSearch")
    public Boolean extendedSearch;
    public GetListings2Listings2GetQueryParams withExtendedSearch(Boolean extendedSearch) {
        this.extendedSearch = extendedSearch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetListings2Listings2GetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelName")
    public String modelName;
    public GetListings2Listings2GetQueryParams withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelYear")
    public Long modelYear;
    public GetListings2Listings2GetQueryParams withModelYear(Long modelYear) {
        this.modelYear = modelYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newCars")
    public Boolean newCars;
    public GetListings2Listings2GetQueryParams withNewCars(Boolean newCars) {
        this.newCars = newCars;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetListings2Listings2GetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetListings2Listings2GetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public GetListings2Listings2GetQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zipCode")
    public Long zipCode;
    public GetListings2Listings2GetQueryParams withZipCode(Long zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}