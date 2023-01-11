package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabDocumentsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LabDocumentsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}