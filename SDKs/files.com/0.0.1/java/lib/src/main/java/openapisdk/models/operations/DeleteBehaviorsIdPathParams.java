package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBehaviorsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteBehaviorsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}