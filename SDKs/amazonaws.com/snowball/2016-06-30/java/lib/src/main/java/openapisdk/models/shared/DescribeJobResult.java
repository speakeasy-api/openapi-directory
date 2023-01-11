package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeJobResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobMetadata")
    public JobMetadata jobMetadata;
    public DescribeJobResult withJobMetadata(JobMetadata jobMetadata) {
        this.jobMetadata = jobMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubJobMetadata")
    public JobMetadata[] subJobMetadata;
    public DescribeJobResult withSubJobMetadata(JobMetadata[] subJobMetadata) {
        this.subJobMetadata = subJobMetadata;
        return this;
    }
}