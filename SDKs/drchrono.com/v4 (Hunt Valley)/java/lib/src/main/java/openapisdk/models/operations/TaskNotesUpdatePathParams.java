package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskNotesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TaskNotesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}