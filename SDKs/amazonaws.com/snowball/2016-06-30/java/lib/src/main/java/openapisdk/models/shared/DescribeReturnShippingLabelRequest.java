package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeReturnShippingLabelRequest {
    @JsonProperty("JobId")
    public String jobId;
    public DescribeReturnShippingLabelRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}