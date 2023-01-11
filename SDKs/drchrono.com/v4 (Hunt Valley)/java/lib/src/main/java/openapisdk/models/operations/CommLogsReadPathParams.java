package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommLogsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CommLogsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}