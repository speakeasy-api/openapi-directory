package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommLogsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CommLogsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}