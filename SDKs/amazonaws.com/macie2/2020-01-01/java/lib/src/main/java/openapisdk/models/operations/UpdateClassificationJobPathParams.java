package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClassificationJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public UpdateClassificationJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}