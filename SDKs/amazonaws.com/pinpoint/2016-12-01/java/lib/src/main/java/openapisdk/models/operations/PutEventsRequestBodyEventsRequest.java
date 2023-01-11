package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutEventsRequestBodyEventsRequest
 * Specifies a batch of events to process.
**/
public class PutEventsRequestBodyEventsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchItem")
    public java.util.Map<String, openapisdk.models.shared.EventsBatch> batchItem;
    public PutEventsRequestBodyEventsRequest withBatchItem(java.util.Map<String, openapisdk.models.shared.EventsBatch> batchItem) {
        this.batchItem = batchItem;
        return this;
    }
}