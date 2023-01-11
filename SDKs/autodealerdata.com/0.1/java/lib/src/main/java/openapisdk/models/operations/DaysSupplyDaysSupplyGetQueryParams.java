package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DaysSupplyDaysSupplyGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public DaysSupplyDaysSupplyGetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public DaysSupplyDaysSupplyGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public DaysSupplyDaysSupplyGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}