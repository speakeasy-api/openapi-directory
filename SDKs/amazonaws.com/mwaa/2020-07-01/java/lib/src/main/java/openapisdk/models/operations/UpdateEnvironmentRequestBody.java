package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEnvironmentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AirflowConfigurationOptions")
    public java.util.Map<String, String> airflowConfigurationOptions;
    public UpdateEnvironmentRequestBody withAirflowConfigurationOptions(java.util.Map<String, String> airflowConfigurationOptions) {
        this.airflowConfigurationOptions = airflowConfigurationOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AirflowVersion")
    public String airflowVersion;
    public UpdateEnvironmentRequestBody withAirflowVersion(String airflowVersion) {
        this.airflowVersion = airflowVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DagS3Path")
    public String dagS3Path;
    public UpdateEnvironmentRequestBody withDagS3Path(String dagS3Path) {
        this.dagS3Path = dagS3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnvironmentClass")
    public String environmentClass;
    public UpdateEnvironmentRequestBody withEnvironmentClass(String environmentClass) {
        this.environmentClass = environmentClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionRoleArn")
    public String executionRoleArn;
    public UpdateEnvironmentRequestBody withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingConfiguration")
    public UpdateEnvironmentRequestBodyLoggingConfiguration loggingConfiguration;
    public UpdateEnvironmentRequestBody withLoggingConfiguration(UpdateEnvironmentRequestBodyLoggingConfiguration loggingConfiguration) {
        this.loggingConfiguration = loggingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxWorkers")
    public Long maxWorkers;
    public UpdateEnvironmentRequestBody withMaxWorkers(Long maxWorkers) {
        this.maxWorkers = maxWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinWorkers")
    public Long minWorkers;
    public UpdateEnvironmentRequestBody withMinWorkers(Long minWorkers) {
        this.minWorkers = minWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkConfiguration")
    public UpdateEnvironmentRequestBodyNetworkConfiguration networkConfiguration;
    public UpdateEnvironmentRequestBody withNetworkConfiguration(UpdateEnvironmentRequestBodyNetworkConfiguration networkConfiguration) {
        this.networkConfiguration = networkConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PluginsS3ObjectVersion")
    public String pluginsS3ObjectVersion;
    public UpdateEnvironmentRequestBody withPluginsS3ObjectVersion(String pluginsS3ObjectVersion) {
        this.pluginsS3ObjectVersion = pluginsS3ObjectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PluginsS3Path")
    public String pluginsS3Path;
    public UpdateEnvironmentRequestBody withPluginsS3Path(String pluginsS3Path) {
        this.pluginsS3Path = pluginsS3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequirementsS3ObjectVersion")
    public String requirementsS3ObjectVersion;
    public UpdateEnvironmentRequestBody withRequirementsS3ObjectVersion(String requirementsS3ObjectVersion) {
        this.requirementsS3ObjectVersion = requirementsS3ObjectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequirementsS3Path")
    public String requirementsS3Path;
    public UpdateEnvironmentRequestBody withRequirementsS3Path(String requirementsS3Path) {
        this.requirementsS3Path = requirementsS3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedulers")
    public Long schedulers;
    public UpdateEnvironmentRequestBody withSchedulers(Long schedulers) {
        this.schedulers = schedulers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceBucketArn")
    public String sourceBucketArn;
    public UpdateEnvironmentRequestBody withSourceBucketArn(String sourceBucketArn) {
        this.sourceBucketArn = sourceBucketArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebserverAccessMode")
    public UpdateEnvironmentRequestBodyWebserverAccessModeEnum webserverAccessMode;
    public UpdateEnvironmentRequestBody withWebserverAccessMode(UpdateEnvironmentRequestBodyWebserverAccessModeEnum webserverAccessMode) {
        this.webserverAccessMode = webserverAccessMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WeeklyMaintenanceWindowStart")
    public String weeklyMaintenanceWindowStart;
    public UpdateEnvironmentRequestBody withWeeklyMaintenanceWindowStart(String weeklyMaintenanceWindowStart) {
        this.weeklyMaintenanceWindowStart = weeklyMaintenanceWindowStart;
        return this;
    }
}