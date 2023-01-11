package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListingsByZipCodeListingsByZipCodeGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public ListingsByZipCodeListingsByZipCodeGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelName")
    public String modelName;
    public ListingsByZipCodeListingsByZipCodeGetQueryParams withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newCars")
    public Boolean newCars;
    public ListingsByZipCodeListingsByZipCodeGetQueryParams withNewCars(Boolean newCars) {
        this.newCars = newCars;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListingsByZipCodeListingsByZipCodeGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zipCode")
    public Long zipCode;
    public ListingsByZipCodeListingsByZipCodeGetQueryParams withZipCode(Long zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}