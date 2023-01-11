package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDriverPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteDriverPathParams withId(String id) {
        this.id = id;
        return this;
    }
}