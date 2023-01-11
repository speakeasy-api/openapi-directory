package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskTemplatesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TaskTemplatesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}