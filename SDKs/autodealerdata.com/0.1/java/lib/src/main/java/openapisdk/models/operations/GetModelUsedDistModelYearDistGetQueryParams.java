package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelUsedDistModelYearDistGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public GetModelUsedDistModelYearDistGetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetModelUsedDistModelYearDistGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelName")
    public String modelName;
    public GetModelUsedDistModelYearDistGetQueryParams withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetModelUsedDistModelYearDistGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}