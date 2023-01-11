package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBinIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBinIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}