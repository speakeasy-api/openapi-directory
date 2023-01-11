package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchConnectorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchConnectorPathParams withId(String id) {
        this.id = id;
        return this;
    }
}