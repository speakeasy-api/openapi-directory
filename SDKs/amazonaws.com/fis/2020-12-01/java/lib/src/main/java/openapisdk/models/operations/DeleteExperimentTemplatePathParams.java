package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteExperimentTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteExperimentTemplatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}