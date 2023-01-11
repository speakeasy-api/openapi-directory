package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimulationJobRequest
 * Information about a simulation job request.
**/
public class SimulationJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compute")
    public Compute compute;
    public SimulationJobRequest withCompute(Compute compute) {
        this.compute = compute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSources")
    public DataSourceConfig[] dataSources;
    public SimulationJobRequest withDataSources(DataSourceConfig[] dataSources) {
        this.dataSources = dataSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureBehavior")
    public FailureBehaviorEnum failureBehavior;
    public SimulationJobRequest withFailureBehavior(FailureBehaviorEnum failureBehavior) {
        this.failureBehavior = failureBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamRole")
    public String iamRole;
    public SimulationJobRequest withIamRole(String iamRole) {
        this.iamRole = iamRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfig")
    public LoggingConfig loggingConfig;
    public SimulationJobRequest withLoggingConfig(LoggingConfig loggingConfig) {
        this.loggingConfig = loggingConfig;
        return this;
    }
    @JsonProperty("maxJobDurationInSeconds")
    public Long maxJobDurationInSeconds;
    public SimulationJobRequest withMaxJobDurationInSeconds(Long maxJobDurationInSeconds) {
        this.maxJobDurationInSeconds = maxJobDurationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputLocation")
    public OutputLocation outputLocation;
    public SimulationJobRequest withOutputLocation(OutputLocation outputLocation) {
        this.outputLocation = outputLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotApplications")
    public RobotApplicationConfig[] robotApplications;
    public SimulationJobRequest withRobotApplications(RobotApplicationConfig[] robotApplications) {
        this.robotApplications = robotApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simulationApplications")
    public SimulationApplicationConfig[] simulationApplications;
    public SimulationJobRequest withSimulationApplications(SimulationApplicationConfig[] simulationApplications) {
        this.simulationApplications = simulationApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public SimulationJobRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDefaultApplications")
    public Boolean useDefaultApplications;
    public SimulationJobRequest withUseDefaultApplications(Boolean useDefaultApplications) {
        this.useDefaultApplications = useDefaultApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConfig")
    public VpcConfig vpcConfig;
    public SimulationJobRequest withVpcConfig(VpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}