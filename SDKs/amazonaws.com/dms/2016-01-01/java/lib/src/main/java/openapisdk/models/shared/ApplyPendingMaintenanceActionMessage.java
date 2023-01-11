package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ApplyPendingMaintenanceActionMessage
 * <p/>
**/
public class ApplyPendingMaintenanceActionMessage {
    @JsonProperty("ApplyAction")
    public String applyAction;
    public ApplyPendingMaintenanceActionMessage withApplyAction(String applyAction) {
        this.applyAction = applyAction;
        return this;
    }
    @JsonProperty("OptInType")
    public String optInType;
    public ApplyPendingMaintenanceActionMessage withOptInType(String optInType) {
        this.optInType = optInType;
        return this;
    }
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public ApplyPendingMaintenanceActionMessage withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
}