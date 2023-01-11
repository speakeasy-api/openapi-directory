package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueueResponseMessages
 * Details of messages in the queue.
**/
public class QueueResponseMessages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ready")
    public Long ready;
    public QueueResponseMessages withReady(Long ready) {
        this.ready = ready;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public QueueResponseMessages withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unacknowledged")
    public Long unacknowledged;
    public QueueResponseMessages withUnacknowledged(Long unacknowledged) {
        this.unacknowledged = unacknowledged;
        return this;
    }
}