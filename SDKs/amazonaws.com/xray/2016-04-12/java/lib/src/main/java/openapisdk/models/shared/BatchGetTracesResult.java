package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetTracesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchGetTracesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Traces")
    public Trace[] traces;
    public BatchGetTracesResult withTraces(Trace[] traces) {
        this.traces = traces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedTraceIds")
    public String[] unprocessedTraceIds;
    public BatchGetTracesResult withUnprocessedTraceIds(String[] unprocessedTraceIds) {
        this.unprocessedTraceIds = unprocessedTraceIds;
        return this;
    }
}