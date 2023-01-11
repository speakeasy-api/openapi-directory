package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelName")
    public String modelName;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newCars")
    public Boolean newCars;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams withNewCars(Boolean newCars) {
        this.newCars = newCars;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zipCode")
    public Long zipCode;
    public ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams withZipCode(Long zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}