package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomerServiceMetricTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_range")
    public String dateRange;
    public GetCustomerServiceMetricTasksQueryParams withDateRange(String dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=feed_type")
    public String feedType;
    public GetCustomerServiceMetricTasksQueryParams withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetCustomerServiceMetricTasksQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=look_back_days")
    public String lookBackDays;
    public GetCustomerServiceMetricTasksQueryParams withLookBackDays(String lookBackDays) {
        this.lookBackDays = lookBackDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetCustomerServiceMetricTasksQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}