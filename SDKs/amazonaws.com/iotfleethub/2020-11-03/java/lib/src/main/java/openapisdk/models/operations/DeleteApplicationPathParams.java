package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public DeleteApplicationPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}