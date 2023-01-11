package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImportJobsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetImportJobsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}