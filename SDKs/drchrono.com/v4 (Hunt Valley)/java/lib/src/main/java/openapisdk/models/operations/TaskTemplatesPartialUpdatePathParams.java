package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskTemplatesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TaskTemplatesPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}