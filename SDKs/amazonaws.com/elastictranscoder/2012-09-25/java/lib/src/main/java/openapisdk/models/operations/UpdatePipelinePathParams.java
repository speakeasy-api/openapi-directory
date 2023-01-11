package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public UpdatePipelinePathParams withId(String id) {
        this.id = id;
        return this;
    }
}