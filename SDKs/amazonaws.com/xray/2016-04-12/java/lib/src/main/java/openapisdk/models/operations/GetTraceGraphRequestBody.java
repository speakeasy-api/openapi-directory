package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTraceGraphRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetTraceGraphRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("TraceIds")
    public String[] traceIds;
    public GetTraceGraphRequestBody withTraceIds(String[] traceIds) {
        this.traceIds = traceIds;
        return this;
    }
}