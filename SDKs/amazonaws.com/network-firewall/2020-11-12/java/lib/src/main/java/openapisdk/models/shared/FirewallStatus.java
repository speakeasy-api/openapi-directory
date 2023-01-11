package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirewallStatus
 * Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.
**/
public class FirewallStatus {
    @JsonProperty("ConfigurationSyncStateSummary")
    public ConfigurationSyncStateEnum configurationSyncStateSummary;
    public FirewallStatus withConfigurationSyncStateSummary(ConfigurationSyncStateEnum configurationSyncStateSummary) {
        this.configurationSyncStateSummary = configurationSyncStateSummary;
        return this;
    }
    @JsonProperty("Status")
    public FirewallStatusValueEnum status;
    public FirewallStatus withStatus(FirewallStatusValueEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SyncStates")
    public java.util.Map<String, SyncState> syncStates;
    public FirewallStatus withSyncStates(java.util.Map<String, SyncState> syncStates) {
        this.syncStates = syncStates;
        return this;
    }
}