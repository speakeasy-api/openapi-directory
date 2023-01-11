package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLatestResultFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schedule_id")
    public String scheduleId;
    public GetLatestResultFilePathParams withScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
        return this;
    }
}