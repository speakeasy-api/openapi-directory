package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskCategoriesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TaskCategoriesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}