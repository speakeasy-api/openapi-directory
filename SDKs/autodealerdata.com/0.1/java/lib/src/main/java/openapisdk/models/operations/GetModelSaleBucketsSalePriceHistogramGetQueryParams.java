package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelSaleBucketsSalePriceHistogramGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public GetModelSaleBucketsSalePriceHistogramGetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetModelSaleBucketsSalePriceHistogramGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelName")
    public String modelName;
    public GetModelSaleBucketsSalePriceHistogramGetQueryParams withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetModelSaleBucketsSalePriceHistogramGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}