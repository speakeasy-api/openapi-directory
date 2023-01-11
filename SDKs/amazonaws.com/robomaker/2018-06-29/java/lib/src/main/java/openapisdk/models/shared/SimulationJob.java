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
 * SimulationJob
 * Information about a simulation job.
**/
public class SimulationJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public SimulationJob withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public SimulationJob withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compute")
    public ComputeResponse compute;
    public SimulationJob withCompute(ComputeResponse compute) {
        this.compute = compute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSources")
    public DataSource[] dataSources;
    public SimulationJob withDataSources(DataSource[] dataSources) {
        this.dataSources = dataSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureBehavior")
    public FailureBehaviorEnum failureBehavior;
    public SimulationJob withFailureBehavior(FailureBehaviorEnum failureBehavior) {
        this.failureBehavior = failureBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCode")
    public SimulationJobErrorCodeEnum failureCode;
    public SimulationJob withFailureCode(SimulationJobErrorCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public SimulationJob withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamRole")
    public String iamRole;
    public SimulationJob withIamRole(String iamRole) {
        this.iamRole = iamRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastStartedAt")
    public OffsetDateTime lastStartedAt;
    public SimulationJob withLastStartedAt(OffsetDateTime lastStartedAt) {
        this.lastStartedAt = lastStartedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public SimulationJob withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfig")
    public LoggingConfig loggingConfig;
    public SimulationJob withLoggingConfig(LoggingConfig loggingConfig) {
        this.loggingConfig = loggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxJobDurationInSeconds")
    public Long maxJobDurationInSeconds;
    public SimulationJob withMaxJobDurationInSeconds(Long maxJobDurationInSeconds) {
        this.maxJobDurationInSeconds = maxJobDurationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SimulationJob withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterface")
    public NetworkInterface networkInterface;
    public SimulationJob withNetworkInterface(NetworkInterface networkInterface) {
        this.networkInterface = networkInterface;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputLocation")
    public OutputLocation outputLocation;
    public SimulationJob withOutputLocation(OutputLocation outputLocation) {
        this.outputLocation = outputLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotApplications")
    public RobotApplicationConfig[] robotApplications;
    public SimulationJob withRobotApplications(RobotApplicationConfig[] robotApplications) {
        this.robotApplications = robotApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simulationApplications")
    public SimulationApplicationConfig[] simulationApplications;
    public SimulationJob withSimulationApplications(SimulationApplicationConfig[] simulationApplications) {
        this.simulationApplications = simulationApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simulationTimeMillis")
    public Long simulationTimeMillis;
    public SimulationJob withSimulationTimeMillis(Long simulationTimeMillis) {
        this.simulationTimeMillis = simulationTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SimulationJobStatusEnum status;
    public SimulationJob withStatus(SimulationJobStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public SimulationJob withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConfig")
    public VpcConfigResponse vpcConfig;
    public SimulationJob withVpcConfig(VpcConfigResponse vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}