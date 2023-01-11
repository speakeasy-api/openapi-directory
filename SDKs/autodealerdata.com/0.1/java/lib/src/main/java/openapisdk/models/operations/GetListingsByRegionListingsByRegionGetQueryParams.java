package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingsByRegionListingsByRegionGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=daysBack")
    public Long daysBack;
    public GetListingsByRegionListingsByRegionGetQueryParams withDaysBack(Long daysBack) {
        this.daysBack = daysBack;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetListingsByRegionListingsByRegionGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelName")
    public String modelName;
    public GetListingsByRegionListingsByRegionGetQueryParams withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newCars")
    public Boolean newCars;
    public GetListingsByRegionListingsByRegionGetQueryParams withNewCars(Boolean newCars) {
        this.newCars = newCars;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetListingsByRegionListingsByRegionGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetListingsByRegionListingsByRegionGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}