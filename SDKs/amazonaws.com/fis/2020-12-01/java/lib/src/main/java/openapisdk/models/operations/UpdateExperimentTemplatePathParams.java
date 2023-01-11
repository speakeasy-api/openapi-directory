package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExperimentTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateExperimentTemplatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}