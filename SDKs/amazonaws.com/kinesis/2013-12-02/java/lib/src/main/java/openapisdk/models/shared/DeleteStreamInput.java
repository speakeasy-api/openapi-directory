package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteStreamInput
 * Represents the input for <a>DeleteStream</a>.
**/
public class DeleteStreamInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnforceConsumerDeletion")
    public Boolean enforceConsumerDeletion;
    public DeleteStreamInput withEnforceConsumerDeletion(Boolean enforceConsumerDeletion) {
        this.enforceConsumerDeletion = enforceConsumerDeletion;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public DeleteStreamInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}