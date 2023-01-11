package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadPipelinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public ReadPipelinePathParams withId(String id) {
        this.id = id;
        return this;
    }
}