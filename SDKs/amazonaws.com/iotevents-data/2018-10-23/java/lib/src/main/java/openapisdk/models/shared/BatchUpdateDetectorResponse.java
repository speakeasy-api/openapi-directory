package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchUpdateDetectorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchUpdateDetectorErrorEntries")
    public BatchUpdateDetectorErrorEntry[] batchUpdateDetectorErrorEntries;
    public BatchUpdateDetectorResponse withBatchUpdateDetectorErrorEntries(BatchUpdateDetectorErrorEntry[] batchUpdateDetectorErrorEntries) {
        this.batchUpdateDetectorErrorEntries = batchUpdateDetectorErrorEntries;
        return this;
    }
}