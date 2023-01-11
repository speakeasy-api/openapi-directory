package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSegmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetSegmentsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}