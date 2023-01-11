package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeInputResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public Input input;
    public DescribeInputResponse withInput(Input input) {
        this.input = input;
        return this;
    }
}