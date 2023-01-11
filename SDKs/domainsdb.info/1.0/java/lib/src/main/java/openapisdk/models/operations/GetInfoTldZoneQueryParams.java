package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInfoTldZoneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetInfoTldZoneQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetInfoTldZoneQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
}