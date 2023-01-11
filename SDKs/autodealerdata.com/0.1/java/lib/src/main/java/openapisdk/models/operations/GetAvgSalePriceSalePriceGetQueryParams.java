package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAvgSalePriceSalePriceGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public GetAvgSalePriceSalePriceGetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetAvgSalePriceSalePriceGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetAvgSalePriceSalePriceGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}