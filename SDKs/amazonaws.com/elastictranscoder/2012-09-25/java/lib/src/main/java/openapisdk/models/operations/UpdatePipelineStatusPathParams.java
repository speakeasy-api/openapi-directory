package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public UpdatePipelineStatusPathParams withId(String id) {
        this.id = id;
        return this;
    }
}