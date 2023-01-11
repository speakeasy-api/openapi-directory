package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleCSubIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sub_id")
    public String subId;
    public GetSchedulesScheduleCSubIdPathParams withSubId(String subId) {
        this.subId = subId;
        return this;
    }
}