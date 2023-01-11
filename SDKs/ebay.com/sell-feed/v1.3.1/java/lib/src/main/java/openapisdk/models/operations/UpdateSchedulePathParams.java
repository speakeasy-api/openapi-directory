package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schedule_id")
    public String scheduleId;
    public UpdateSchedulePathParams withScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
        return this;
    }
}