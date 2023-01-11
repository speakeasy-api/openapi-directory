package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDocumentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchDocumentsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}