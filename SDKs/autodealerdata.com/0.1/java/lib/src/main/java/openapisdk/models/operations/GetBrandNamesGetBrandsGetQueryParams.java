package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBrandNamesGetBrandsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetBrandNamesGetBrandsGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
}