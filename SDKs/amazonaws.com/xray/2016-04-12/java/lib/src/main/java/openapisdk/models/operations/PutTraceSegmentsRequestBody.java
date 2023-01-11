package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutTraceSegmentsRequestBody {
    @JsonProperty("TraceSegmentDocuments")
    public String[] traceSegmentDocuments;
    public PutTraceSegmentsRequestBody withTraceSegmentDocuments(String[] traceSegmentDocuments) {
        this.traceSegmentDocuments = traceSegmentDocuments;
        return this;
    }
}