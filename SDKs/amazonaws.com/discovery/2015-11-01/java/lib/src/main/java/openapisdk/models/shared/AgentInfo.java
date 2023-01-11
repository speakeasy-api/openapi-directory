package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentInfo
 * Information about agents or connectors associated with the user’s AWS account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent.
**/
public class AgentInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentId")
    public String agentId;
    public AgentInfo withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentNetworkInfoList")
    public AgentNetworkInfo[] agentNetworkInfoList;
    public AgentInfo withAgentNetworkInfoList(AgentNetworkInfo[] agentNetworkInfoList) {
        this.agentNetworkInfoList = agentNetworkInfoList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentType")
    public String agentType;
    public AgentInfo withAgentType(String agentType) {
        this.agentType = agentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionStatus")
    public String collectionStatus;
    public AgentInfo withCollectionStatus(String collectionStatus) {
        this.collectionStatus = collectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorId")
    public String connectorId;
    public AgentInfo withConnectorId(String connectorId) {
        this.connectorId = connectorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public AgentStatusEnum health;
    public AgentInfo withHealth(AgentStatusEnum health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostName")
    public String hostName;
    public AgentInfo withHostName(String hostName) {
        this.hostName = hostName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastHealthPingTime")
    public String lastHealthPingTime;
    public AgentInfo withLastHealthPingTime(String lastHealthPingTime) {
        this.lastHealthPingTime = lastHealthPingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registeredTime")
    public String registeredTime;
    public AgentInfo withRegisteredTime(String registeredTime) {
        this.registeredTime = registeredTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public AgentInfo withVersion(String version) {
        this.version = version;
        return this;
    }
}