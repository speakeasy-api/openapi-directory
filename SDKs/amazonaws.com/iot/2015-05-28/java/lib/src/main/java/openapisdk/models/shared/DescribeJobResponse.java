package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentSource")
    public String documentSource;
    public DescribeJobResponse withDocumentSource(String documentSource) {
        this.documentSource = documentSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public Job job;
    public DescribeJobResponse withJob(Job job) {
        this.job = job;
        return this;
    }
}