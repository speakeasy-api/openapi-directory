package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TimeOffRequestsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TimeOffRequestsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}