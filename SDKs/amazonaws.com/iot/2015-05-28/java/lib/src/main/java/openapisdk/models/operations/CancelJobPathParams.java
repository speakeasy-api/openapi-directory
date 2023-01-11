package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public CancelJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}