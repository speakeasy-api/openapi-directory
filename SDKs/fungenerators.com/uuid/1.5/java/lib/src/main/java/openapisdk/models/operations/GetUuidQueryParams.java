package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUuidQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public GetUuidQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
}