package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}