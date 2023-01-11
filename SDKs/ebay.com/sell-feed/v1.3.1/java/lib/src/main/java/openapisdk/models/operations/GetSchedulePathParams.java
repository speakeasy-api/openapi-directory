package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schedule_id")
    public String scheduleId;
    public GetSchedulePathParams withScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
        return this;
    }
}