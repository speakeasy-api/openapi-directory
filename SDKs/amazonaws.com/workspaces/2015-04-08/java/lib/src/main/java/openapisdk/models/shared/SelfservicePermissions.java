package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SelfservicePermissions
 * Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
**/
public class SelfservicePermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeComputeType")
    public ReconnectEnumEnum changeComputeType;
    public SelfservicePermissions withChangeComputeType(ReconnectEnumEnum changeComputeType) {
        this.changeComputeType = changeComputeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncreaseVolumeSize")
    public ReconnectEnumEnum increaseVolumeSize;
    public SelfservicePermissions withIncreaseVolumeSize(ReconnectEnumEnum increaseVolumeSize) {
        this.increaseVolumeSize = increaseVolumeSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RebuildWorkspace")
    public ReconnectEnumEnum rebuildWorkspace;
    public SelfservicePermissions withRebuildWorkspace(ReconnectEnumEnum rebuildWorkspace) {
        this.rebuildWorkspace = rebuildWorkspace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RestartWorkspace")
    public ReconnectEnumEnum restartWorkspace;
    public SelfservicePermissions withRestartWorkspace(ReconnectEnumEnum restartWorkspace) {
        this.restartWorkspace = restartWorkspace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SwitchRunningMode")
    public ReconnectEnumEnum switchRunningMode;
    public SelfservicePermissions withSwitchRunningMode(ReconnectEnumEnum switchRunningMode) {
        this.switchRunningMode = switchRunningMode;
        return this;
    }
}