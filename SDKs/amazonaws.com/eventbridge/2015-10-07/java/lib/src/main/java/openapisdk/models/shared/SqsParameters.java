package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqsParameters
 * This structure includes the custom parameter to be used when the target is an SQS FIFO queue.
**/
public class SqsParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageGroupId")
    public String messageGroupId;
    public SqsParameters withMessageGroupId(String messageGroupId) {
        this.messageGroupId = messageGroupId;
        return this;
    }
}