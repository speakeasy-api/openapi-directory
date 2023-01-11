package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteBatchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}