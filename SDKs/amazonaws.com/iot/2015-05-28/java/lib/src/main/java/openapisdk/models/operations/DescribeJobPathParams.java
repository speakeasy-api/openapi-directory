package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public DescribeJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}