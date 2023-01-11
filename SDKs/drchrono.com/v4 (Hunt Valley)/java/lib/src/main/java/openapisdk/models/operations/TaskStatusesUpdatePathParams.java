package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskStatusesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TaskStatusesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}