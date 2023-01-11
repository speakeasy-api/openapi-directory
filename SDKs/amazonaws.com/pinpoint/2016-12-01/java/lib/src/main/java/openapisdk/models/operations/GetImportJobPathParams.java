package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImportJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetImportJobPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=job-id")
    public String jobId;
    public GetImportJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}