package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePipelinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public DeletePipelinePathParams withId(String id) {
        this.id = id;
        return this;
    }
}