package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubmitContainerStateChangeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgment")
    public String acknowledgment;
    public SubmitContainerStateChangeResponse withAcknowledgment(String acknowledgment) {
        this.acknowledgment = acknowledgment;
        return this;
    }
}