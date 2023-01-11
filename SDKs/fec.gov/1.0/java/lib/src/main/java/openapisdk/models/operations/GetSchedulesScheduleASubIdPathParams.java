package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleASubIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sub_id")
    public String subId;
    public GetSchedulesScheduleASubIdPathParams withSubId(String subId) {
        this.subId = subId;
        return this;
    }
}