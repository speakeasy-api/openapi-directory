package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueueResponseAmqp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queueName")
    public String queueName;
    public QueueResponseAmqp withQueueName(String queueName) {
        this.queueName = queueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public QueueResponseAmqp withUri(String uri) {
        this.uri = uri;
        return this;
    }
}