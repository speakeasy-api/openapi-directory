package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schedule_id")
    public String scheduleId;
    public DeleteSchedulePathParams withScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
        return this;
    }
}