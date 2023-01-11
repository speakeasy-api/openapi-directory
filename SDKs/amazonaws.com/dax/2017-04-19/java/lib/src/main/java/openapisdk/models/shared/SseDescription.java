package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SseDescription
 * The description of the server-side encryption status on the specified DAX cluster.
**/
public class SseDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public SseStatusEnum status;
    public SseDescription withStatus(SseStatusEnum status) {
        this.status = status;
        return this;
    }
}