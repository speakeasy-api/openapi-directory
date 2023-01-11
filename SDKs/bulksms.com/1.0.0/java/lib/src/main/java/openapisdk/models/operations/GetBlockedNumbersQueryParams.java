package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlockedNumbersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetBlockedNumbersQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min-id")
    public Integer minId;
    public GetBlockedNumbersQueryParams withMinId(Integer minId) {
        this.minId = minId;
        return this;
    }
}