package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public NotesDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}