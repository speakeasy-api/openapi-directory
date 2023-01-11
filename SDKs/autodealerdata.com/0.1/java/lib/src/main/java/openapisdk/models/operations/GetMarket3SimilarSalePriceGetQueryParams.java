package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarket3SimilarSalePriceGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=daysBack")
    public Long daysBack;
    public GetMarket3SimilarSalePriceGetQueryParams withDaysBack(Long daysBack) {
        this.daysBack = daysBack;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetMarket3SimilarSalePriceGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetMarket3SimilarSalePriceGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sameYear")
    public Boolean sameYear;
    public GetMarket3SimilarSalePriceGetQueryParams withSameYear(Boolean sameYear) {
        this.sameYear = sameYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vin")
    public String vin;
    public GetMarket3SimilarSalePriceGetQueryParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
}