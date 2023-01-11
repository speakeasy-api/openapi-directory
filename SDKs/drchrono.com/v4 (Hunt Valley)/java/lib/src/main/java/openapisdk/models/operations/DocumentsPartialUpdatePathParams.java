package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DocumentsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DocumentsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}