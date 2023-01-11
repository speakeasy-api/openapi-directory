package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_range")
    public String dateRange;
    public GetOrderTasksQueryParams withDateRange(String dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=feed_type")
    public String feedType;
    public GetOrderTasksQueryParams withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetOrderTasksQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=look_back_days")
    public String lookBackDays;
    public GetOrderTasksQueryParams withLookBackDays(String lookBackDays) {
        this.lookBackDays = lookBackDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetOrderTasksQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=schedule_id")
    public String scheduleId;
    public GetOrderTasksQueryParams withScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
        return this;
    }
}