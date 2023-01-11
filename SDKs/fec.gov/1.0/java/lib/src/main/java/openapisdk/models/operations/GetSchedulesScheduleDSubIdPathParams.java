package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleDSubIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sub_id")
    public String subId;
    public GetSchedulesScheduleDSubIdPathParams withSubId(String subId) {
        this.subId = subId;
        return this;
    }
}