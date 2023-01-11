package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetConnectorPathParams withId(String id) {
        this.id = id;
        return this;
    }
}