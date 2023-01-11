package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DaysToSellDaysToSellGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public DaysToSellDaysToSellGetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public DaysToSellDaysToSellGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public DaysToSellDaysToSellGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}