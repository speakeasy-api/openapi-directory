package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutV3UsageBatchesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutV3UsageBatchesIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}