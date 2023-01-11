package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyReplicationInstanceMessage
 * <p/>
**/
public class ModifyReplicationInstanceMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllocatedStorage")
    public Long allocatedStorage;
    public ModifyReplicationInstanceMessage withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowMajorVersionUpgrade")
    public Boolean allowMajorVersionUpgrade;
    public ModifyReplicationInstanceMessage withAllowMajorVersionUpgrade(Boolean allowMajorVersionUpgrade) {
        this.allowMajorVersionUpgrade = allowMajorVersionUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplyImmediately")
    public Boolean applyImmediately;
    public ModifyReplicationInstanceMessage withApplyImmediately(Boolean applyImmediately) {
        this.applyImmediately = applyImmediately;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoMinorVersionUpgrade")
    public Boolean autoMinorVersionUpgrade;
    public ModifyReplicationInstanceMessage withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersion")
    public String engineVersion;
    public ModifyReplicationInstanceMessage withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiAZ")
    public Boolean multiAZ;
    public ModifyReplicationInstanceMessage withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredMaintenanceWindow")
    public String preferredMaintenanceWindow;
    public ModifyReplicationInstanceMessage withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public ModifyReplicationInstanceMessage withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceClass")
    public String replicationInstanceClass;
    public ModifyReplicationInstanceMessage withReplicationInstanceClass(String replicationInstanceClass) {
        this.replicationInstanceClass = replicationInstanceClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceIdentifier")
    public String replicationInstanceIdentifier;
    public ModifyReplicationInstanceMessage withReplicationInstanceIdentifier(String replicationInstanceIdentifier) {
        this.replicationInstanceIdentifier = replicationInstanceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcSecurityGroupIds")
    public String[] vpcSecurityGroupIds;
    public ModifyReplicationInstanceMessage withVpcSecurityGroupIds(String[] vpcSecurityGroupIds) {
        this.vpcSecurityGroupIds = vpcSecurityGroupIds;
        return this;
    }
}