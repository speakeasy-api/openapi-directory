package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabDocumentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LabDocumentsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}