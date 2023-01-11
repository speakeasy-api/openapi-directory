package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImportJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;
    public GetImportJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}