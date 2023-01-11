package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DocumentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DocumentsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}