package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBalancePlatformsIdAccountHoldersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetBalancePlatformsIdAccountHoldersQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetBalancePlatformsIdAccountHoldersQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}