package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleBSubIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sub_id")
    public String subId;
    public GetSchedulesScheduleBSubIdPathParams withSubId(String subId) {
        this.subId = subId;
        return this;
    }
}