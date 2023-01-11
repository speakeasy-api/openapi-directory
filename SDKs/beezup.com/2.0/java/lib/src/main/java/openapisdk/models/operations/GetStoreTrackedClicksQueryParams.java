package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreTrackedClicksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public GetStoreTrackedClicksQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
}