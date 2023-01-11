package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSimulationJobRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateSimulationJobRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compute")
    public CreateSimulationJobRequestBodyCompute compute;
    public CreateSimulationJobRequestBody withCompute(CreateSimulationJobRequestBodyCompute compute) {
        this.compute = compute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSources")
    public openapisdk.models.shared.DataSourceConfig[] dataSources;
    public CreateSimulationJobRequestBody withDataSources(openapisdk.models.shared.DataSourceConfig[] dataSources) {
        this.dataSources = dataSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureBehavior")
    public CreateSimulationJobRequestBodyFailureBehaviorEnum failureBehavior;
    public CreateSimulationJobRequestBody withFailureBehavior(CreateSimulationJobRequestBodyFailureBehaviorEnum failureBehavior) {
        this.failureBehavior = failureBehavior;
        return this;
    }
    @JsonProperty("iamRole")
    public String iamRole;
    public CreateSimulationJobRequestBody withIamRole(String iamRole) {
        this.iamRole = iamRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfig")
    public CreateSimulationJobRequestBodyLoggingConfig loggingConfig;
    public CreateSimulationJobRequestBody withLoggingConfig(CreateSimulationJobRequestBodyLoggingConfig loggingConfig) {
        this.loggingConfig = loggingConfig;
        return this;
    }
    @JsonProperty("maxJobDurationInSeconds")
    public Long maxJobDurationInSeconds;
    public CreateSimulationJobRequestBody withMaxJobDurationInSeconds(Long maxJobDurationInSeconds) {
        this.maxJobDurationInSeconds = maxJobDurationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputLocation")
    public CreateSimulationJobRequestBodyOutputLocation outputLocation;
    public CreateSimulationJobRequestBody withOutputLocation(CreateSimulationJobRequestBodyOutputLocation outputLocation) {
        this.outputLocation = outputLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotApplications")
    public openapisdk.models.shared.RobotApplicationConfig[] robotApplications;
    public CreateSimulationJobRequestBody withRobotApplications(openapisdk.models.shared.RobotApplicationConfig[] robotApplications) {
        this.robotApplications = robotApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simulationApplications")
    public openapisdk.models.shared.SimulationApplicationConfig[] simulationApplications;
    public CreateSimulationJobRequestBody withSimulationApplications(openapisdk.models.shared.SimulationApplicationConfig[] simulationApplications) {
        this.simulationApplications = simulationApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateSimulationJobRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConfig")
    public CreateSimulationJobRequestBodyVpcConfig vpcConfig;
    public CreateSimulationJobRequestBody withVpcConfig(CreateSimulationJobRequestBodyVpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}