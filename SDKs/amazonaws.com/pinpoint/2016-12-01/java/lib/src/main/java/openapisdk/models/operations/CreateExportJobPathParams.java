package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExportJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public CreateExportJobPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}