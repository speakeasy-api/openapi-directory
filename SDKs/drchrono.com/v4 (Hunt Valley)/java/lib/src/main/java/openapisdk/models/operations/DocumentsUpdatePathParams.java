package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DocumentsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DocumentsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}