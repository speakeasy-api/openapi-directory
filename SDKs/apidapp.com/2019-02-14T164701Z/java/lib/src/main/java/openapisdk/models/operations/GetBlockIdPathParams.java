package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlockIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBlockIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}