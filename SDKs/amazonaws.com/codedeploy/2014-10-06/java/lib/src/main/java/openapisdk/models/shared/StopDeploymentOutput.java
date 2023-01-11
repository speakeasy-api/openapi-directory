package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopDeploymentOutput
 *  Represents the output of a <code>StopDeployment</code> operation. 
**/
public class StopDeploymentOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StopStatusEnum status;
    public StopDeploymentOutput withStatus(StopStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public StopDeploymentOutput withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}