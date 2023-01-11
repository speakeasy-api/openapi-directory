package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcknowledgeThirdPartyJobOutput
 * Represents the output of an AcknowledgeThirdPartyJob action.
**/
public class AcknowledgeThirdPartyJobOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobStatusEnum status;
    public AcknowledgeThirdPartyJobOutput withStatus(JobStatusEnum status) {
        this.status = status;
        return this;
    }
}