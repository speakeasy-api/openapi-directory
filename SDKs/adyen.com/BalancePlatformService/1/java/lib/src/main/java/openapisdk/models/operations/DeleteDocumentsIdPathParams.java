package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDocumentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteDocumentsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}