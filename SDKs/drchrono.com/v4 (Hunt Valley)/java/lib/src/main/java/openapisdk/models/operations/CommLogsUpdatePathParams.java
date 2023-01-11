package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommLogsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CommLogsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}