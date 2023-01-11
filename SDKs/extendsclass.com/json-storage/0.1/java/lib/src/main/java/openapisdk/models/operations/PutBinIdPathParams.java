package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutBinIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutBinIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}