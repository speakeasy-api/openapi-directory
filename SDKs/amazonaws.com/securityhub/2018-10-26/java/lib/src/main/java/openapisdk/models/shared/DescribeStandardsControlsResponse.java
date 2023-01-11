package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeStandardsControlsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Controls")
    public StandardsControl[] controls;
    public DescribeStandardsControlsResponse withControls(StandardsControl[] controls) {
        this.controls = controls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeStandardsControlsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}