package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBinIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteBinIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}