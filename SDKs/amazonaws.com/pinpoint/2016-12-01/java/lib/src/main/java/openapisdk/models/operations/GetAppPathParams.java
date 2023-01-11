package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetAppPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}