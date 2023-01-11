package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelNamesAllGetInactiveModelsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandName")
    public String brandName;
    public GetModelNamesAllGetInactiveModelsGetQueryParams withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetModelNamesAllGetInactiveModelsGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
}