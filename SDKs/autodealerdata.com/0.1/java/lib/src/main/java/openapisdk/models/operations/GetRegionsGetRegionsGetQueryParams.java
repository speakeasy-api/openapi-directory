package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegionsGetRegionsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetRegionsGetRegionsGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
}