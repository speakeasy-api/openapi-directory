package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public CreateJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}