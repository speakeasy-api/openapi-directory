package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobExecutionsForJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public ListJobExecutionsForJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}