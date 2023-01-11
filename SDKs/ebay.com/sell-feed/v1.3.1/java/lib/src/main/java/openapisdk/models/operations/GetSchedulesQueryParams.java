package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=feed_type")
    public String feedType;
    public GetSchedulesQueryParams withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetSchedulesQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetSchedulesQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}