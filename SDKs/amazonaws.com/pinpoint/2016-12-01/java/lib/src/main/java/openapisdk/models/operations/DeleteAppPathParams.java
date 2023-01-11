package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteAppPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}