package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportJobsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetExportJobsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}