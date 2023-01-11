package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskNotesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TaskNotesPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}