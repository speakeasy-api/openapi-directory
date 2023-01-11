package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_range")
    public String dateRange;
    public GetTasksQueryParams withDateRange(String dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=feed_type")
    public String feedType;
    public GetTasksQueryParams withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetTasksQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=look_back_days")
    public String lookBackDays;
    public GetTasksQueryParams withLookBackDays(String lookBackDays) {
        this.lookBackDays = lookBackDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetTasksQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=schedule_id")
    public String scheduleId;
    public GetTasksQueryParams withScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
        return this;
    }
}