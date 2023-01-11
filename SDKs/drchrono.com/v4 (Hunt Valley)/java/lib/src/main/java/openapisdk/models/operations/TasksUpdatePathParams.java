package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TasksUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}