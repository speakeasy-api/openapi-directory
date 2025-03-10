/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeploymentModel - &lt;p/&gt;
 */
public class DeploymentModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DesiredState")
    public ModelStateEnum desiredState;

    public DeploymentModel withDesiredState(ModelStateEnum desiredState) {
        this.desiredState = desiredState;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelHandle")
    public String modelHandle;

    public DeploymentModel withModelHandle(String modelHandle) {
        this.modelHandle = modelHandle;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelName")
    public String modelName;

    public DeploymentModel withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelVersion")
    public String modelVersion;

    public DeploymentModel withModelVersion(String modelVersion) {
        this.modelVersion = modelVersion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RollbackFailureReason")
    public String rollbackFailureReason;

    public DeploymentModel withRollbackFailureReason(String rollbackFailureReason) {
        this.rollbackFailureReason = rollbackFailureReason;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ModelStateEnum state;

    public DeploymentModel withState(ModelStateEnum state) {
        this.state = state;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public DeploymentStatusEnum status;

    public DeploymentModel withStatus(DeploymentStatusEnum status) {
        this.status = status;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public String statusReason;

    public DeploymentModel withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    
    public DeploymentModel(){}
}
