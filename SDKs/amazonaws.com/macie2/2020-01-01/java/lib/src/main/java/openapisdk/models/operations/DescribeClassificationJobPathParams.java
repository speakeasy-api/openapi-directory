package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeClassificationJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public DescribeClassificationJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}