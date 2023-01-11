package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public DeleteJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}