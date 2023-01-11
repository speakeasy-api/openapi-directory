package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImportJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public CreateImportJobPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}