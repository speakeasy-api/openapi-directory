package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelPolicyGenerationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public CancelPolicyGenerationPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}