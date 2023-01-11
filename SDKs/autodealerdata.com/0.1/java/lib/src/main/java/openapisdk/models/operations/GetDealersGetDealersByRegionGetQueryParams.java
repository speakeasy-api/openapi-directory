package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealersGetDealersByRegionGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetDealersGetDealersByRegionGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetDealersGetDealersByRegionGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetDealersGetDealersByRegionGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}