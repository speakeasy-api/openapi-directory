package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public GetJobDocumentPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}