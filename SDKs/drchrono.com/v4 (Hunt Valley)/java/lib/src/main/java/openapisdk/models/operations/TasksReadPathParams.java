package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TasksReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}