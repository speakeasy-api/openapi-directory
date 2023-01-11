package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsFilter {
    @SpeakeasyMetadata("queryParam:name=job_id")
    public String jobId;
    public JobsFilter withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}