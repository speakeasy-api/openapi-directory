package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetExportJobPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job-id")
    public String jobId;
    public GetExportJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}