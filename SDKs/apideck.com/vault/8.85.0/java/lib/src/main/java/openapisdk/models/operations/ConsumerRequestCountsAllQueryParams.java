package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsumerRequestCountsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_datetime")
    public String endDatetime;
    public ConsumerRequestCountsAllQueryParams withEndDatetime(String endDatetime) {
        this.endDatetime = endDatetime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_datetime")
    public String startDatetime;
    public ConsumerRequestCountsAllQueryParams withStartDatetime(String startDatetime) {
        this.startDatetime = startDatetime;
        return this;
    }
}