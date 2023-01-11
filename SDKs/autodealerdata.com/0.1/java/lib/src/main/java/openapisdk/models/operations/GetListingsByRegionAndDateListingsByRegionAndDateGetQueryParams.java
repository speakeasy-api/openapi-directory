package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelName")
    public String modelName;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newCars")
    public Boolean newCars;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams withNewCars(Boolean newCars) {
        this.newCars = newCars;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}