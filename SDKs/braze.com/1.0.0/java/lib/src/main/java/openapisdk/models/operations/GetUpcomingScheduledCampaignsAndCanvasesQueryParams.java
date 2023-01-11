package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpcomingScheduledCampaignsAndCanvasesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_time")
    public String endTime;
    public GetUpcomingScheduledCampaignsAndCanvasesQueryParams withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
}