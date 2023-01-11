package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneratedPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public GetGeneratedPolicyPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}