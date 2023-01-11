package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public NotesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}