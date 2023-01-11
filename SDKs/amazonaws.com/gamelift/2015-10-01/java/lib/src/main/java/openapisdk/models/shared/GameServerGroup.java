package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GameServerGroup
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p> <p> <b>Related actions</b> </p> <p> <a>CreateGameServerGroup</a> | <a>ListGameServerGroups</a> | <a>DescribeGameServerGroup</a> | <a>UpdateGameServerGroup</a> | <a>DeleteGameServerGroup</a> | <a>ResumeGameServerGroup</a> | <a>SuspendGameServerGroup</a> | <a>DescribeGameServerInstances</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
**/
public class GameServerGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingGroupArn")
    public String autoScalingGroupArn;
    public GameServerGroup withAutoScalingGroupArn(String autoScalingGroupArn) {
        this.autoScalingGroupArn = autoScalingGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BalancingStrategy")
    public BalancingStrategyEnum balancingStrategy;
    public GameServerGroup withBalancingStrategy(BalancingStrategyEnum balancingStrategy) {
        this.balancingStrategy = balancingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public GameServerGroup withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerGroupArn")
    public String gameServerGroupArn;
    public GameServerGroup withGameServerGroupArn(String gameServerGroupArn) {
        this.gameServerGroupArn = gameServerGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerGroupName")
    public String gameServerGroupName;
    public GameServerGroup withGameServerGroupName(String gameServerGroupName) {
        this.gameServerGroupName = gameServerGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameServerProtectionPolicy")
    public GameServerProtectionPolicyEnum gameServerProtectionPolicy;
    public GameServerGroup withGameServerProtectionPolicy(GameServerProtectionPolicyEnum gameServerProtectionPolicy) {
        this.gameServerProtectionPolicy = gameServerProtectionPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceDefinitions")
    public InstanceDefinition[] instanceDefinitions;
    public GameServerGroup withInstanceDefinitions(InstanceDefinition[] instanceDefinitions) {
        this.instanceDefinitions = instanceDefinitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTime")
    public OffsetDateTime lastUpdatedTime;
    public GameServerGroup withLastUpdatedTime(OffsetDateTime lastUpdatedTime) {
        this.lastUpdatedTime = lastUpdatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public GameServerGroup withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public GameServerGroupStatusEnum status;
    public GameServerGroup withStatus(GameServerGroupStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public String statusReason;
    public GameServerGroup withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuspendedActions")
    public GameServerGroupActionEnum[] suspendedActions;
    public GameServerGroup withSuspendedActions(GameServerGroupActionEnum[] suspendedActions) {
        this.suspendedActions = suspendedActions;
        return this;
    }
}