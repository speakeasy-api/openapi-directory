package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public UpdateJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}