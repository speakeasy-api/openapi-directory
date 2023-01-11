package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventBatchingCondition
 * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
**/
public class EventBatchingCondition {
    @JsonProperty("BatchSize")
    public Long batchSize;
    public EventBatchingCondition withBatchSize(Long batchSize) {
        this.batchSize = batchSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchWindow")
    public Long batchWindow;
    public EventBatchingCondition withBatchWindow(Long batchWindow) {
        this.batchWindow = batchWindow;
        return this;
    }
}