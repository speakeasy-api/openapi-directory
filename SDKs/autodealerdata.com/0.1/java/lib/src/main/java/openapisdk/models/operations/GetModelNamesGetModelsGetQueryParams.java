package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelNamesGetModelsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public GetModelNamesGetModelsGetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetModelNamesGetModelsGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
}