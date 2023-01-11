package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInputsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputSummaries")
    public InputSummary[] inputSummaries;
    public ListInputsResponse withInputSummaries(InputSummary[] inputSummaries) {
        this.inputSummaries = inputSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListInputsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}