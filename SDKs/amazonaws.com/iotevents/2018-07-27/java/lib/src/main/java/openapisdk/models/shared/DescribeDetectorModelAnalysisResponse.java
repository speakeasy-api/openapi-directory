package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDetectorModelAnalysisResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AnalysisStatusEnum status;
    public DescribeDetectorModelAnalysisResponse withStatus(AnalysisStatusEnum status) {
        this.status = status;
        return this;
    }
}