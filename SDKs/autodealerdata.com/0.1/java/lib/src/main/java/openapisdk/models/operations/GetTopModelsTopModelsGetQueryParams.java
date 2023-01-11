package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTopModelsTopModelsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetTopModelsTopModelsGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionName")
    public String regionName;
    public GetTopModelsTopModelsGetQueryParams withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}