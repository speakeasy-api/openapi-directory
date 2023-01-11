package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreTrackedOrdersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public GetStoreTrackedOrdersQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
}