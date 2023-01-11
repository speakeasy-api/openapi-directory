package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RollbackInfo
 * Information about a deployment rollback.
**/
public class RollbackInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollbackDeploymentId")
    public String rollbackDeploymentId;
    public RollbackInfo withRollbackDeploymentId(String rollbackDeploymentId) {
        this.rollbackDeploymentId = rollbackDeploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollbackMessage")
    public String rollbackMessage;
    public RollbackInfo withRollbackMessage(String rollbackMessage) {
        this.rollbackMessage = rollbackMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollbackTriggeringDeploymentId")
    public String rollbackTriggeringDeploymentId;
    public RollbackInfo withRollbackTriggeringDeploymentId(String rollbackTriggeringDeploymentId) {
        this.rollbackTriggeringDeploymentId = rollbackTriggeringDeploymentId;
        return this;
    }
}