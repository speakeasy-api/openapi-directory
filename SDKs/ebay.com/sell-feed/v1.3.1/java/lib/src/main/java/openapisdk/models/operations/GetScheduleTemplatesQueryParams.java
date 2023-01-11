package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScheduleTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=feed_type")
    public String feedType;
    public GetScheduleTemplatesQueryParams withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetScheduleTemplatesQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetScheduleTemplatesQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}