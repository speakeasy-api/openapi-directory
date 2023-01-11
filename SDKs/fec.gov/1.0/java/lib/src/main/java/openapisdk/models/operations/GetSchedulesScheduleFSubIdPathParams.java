package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleFSubIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sub_id")
    public String subId;
    public GetSchedulesScheduleFSubIdPathParams withSubId(String subId) {
        this.subId = subId;
        return this;
    }
}