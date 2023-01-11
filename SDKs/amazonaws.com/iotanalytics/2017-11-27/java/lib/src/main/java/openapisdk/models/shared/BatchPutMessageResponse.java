package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchPutMessageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchPutMessageErrorEntries")
    public BatchPutMessageErrorEntry[] batchPutMessageErrorEntries;
    public BatchPutMessageResponse withBatchPutMessageErrorEntries(BatchPutMessageErrorEntry[] batchPutMessageErrorEntries) {
        this.batchPutMessageErrorEntries = batchPutMessageErrorEntries;
        return this;
    }
}