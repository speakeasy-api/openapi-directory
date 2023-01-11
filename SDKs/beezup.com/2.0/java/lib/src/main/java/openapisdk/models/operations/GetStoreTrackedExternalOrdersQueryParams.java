package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreTrackedExternalOrdersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public GetStoreTrackedExternalOrdersQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
}