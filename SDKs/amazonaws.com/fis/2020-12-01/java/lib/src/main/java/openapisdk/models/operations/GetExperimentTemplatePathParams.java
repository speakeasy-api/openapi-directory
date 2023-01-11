package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExperimentTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetExperimentTemplatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}