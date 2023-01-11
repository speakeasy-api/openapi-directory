package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskStatusesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TaskStatusesPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}