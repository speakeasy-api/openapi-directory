package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnvironmentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AirflowConfigurationOptions")
    public java.util.Map<String, String> airflowConfigurationOptions;
    public CreateEnvironmentRequestBody withAirflowConfigurationOptions(java.util.Map<String, String> airflowConfigurationOptions) {
        this.airflowConfigurationOptions = airflowConfigurationOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AirflowVersion")
    public String airflowVersion;
    public CreateEnvironmentRequestBody withAirflowVersion(String airflowVersion) {
        this.airflowVersion = airflowVersion;
        return this;
    }
    @JsonProperty("DagS3Path")
    public String dagS3Path;
    public CreateEnvironmentRequestBody withDagS3Path(String dagS3Path) {
        this.dagS3Path = dagS3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnvironmentClass")
    public String environmentClass;
    public CreateEnvironmentRequestBody withEnvironmentClass(String environmentClass) {
        this.environmentClass = environmentClass;
        return this;
    }
    @JsonProperty("ExecutionRoleArn")
    public String executionRoleArn;
    public CreateEnvironmentRequestBody withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKey")
    public String kmsKey;
    public CreateEnvironmentRequestBody withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingConfiguration")
    public CreateEnvironmentRequestBodyLoggingConfiguration loggingConfiguration;
    public CreateEnvironmentRequestBody withLoggingConfiguration(CreateEnvironmentRequestBodyLoggingConfiguration loggingConfiguration) {
        this.loggingConfiguration = loggingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxWorkers")
    public Long maxWorkers;
    public CreateEnvironmentRequestBody withMaxWorkers(Long maxWorkers) {
        this.maxWorkers = maxWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinWorkers")
    public Long minWorkers;
    public CreateEnvironmentRequestBody withMinWorkers(Long minWorkers) {
        this.minWorkers = minWorkers;
        return this;
    }
    @JsonProperty("NetworkConfiguration")
    public CreateEnvironmentRequestBodyNetworkConfiguration networkConfiguration;
    public CreateEnvironmentRequestBody withNetworkConfiguration(CreateEnvironmentRequestBodyNetworkConfiguration networkConfiguration) {
        this.networkConfiguration = networkConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PluginsS3ObjectVersion")
    public String pluginsS3ObjectVersion;
    public CreateEnvironmentRequestBody withPluginsS3ObjectVersion(String pluginsS3ObjectVersion) {
        this.pluginsS3ObjectVersion = pluginsS3ObjectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PluginsS3Path")
    public String pluginsS3Path;
    public CreateEnvironmentRequestBody withPluginsS3Path(String pluginsS3Path) {
        this.pluginsS3Path = pluginsS3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequirementsS3ObjectVersion")
    public String requirementsS3ObjectVersion;
    public CreateEnvironmentRequestBody withRequirementsS3ObjectVersion(String requirementsS3ObjectVersion) {
        this.requirementsS3ObjectVersion = requirementsS3ObjectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequirementsS3Path")
    public String requirementsS3Path;
    public CreateEnvironmentRequestBody withRequirementsS3Path(String requirementsS3Path) {
        this.requirementsS3Path = requirementsS3Path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedulers")
    public Long schedulers;
    public CreateEnvironmentRequestBody withSchedulers(Long schedulers) {
        this.schedulers = schedulers;
        return this;
    }
    @JsonProperty("SourceBucketArn")
    public String sourceBucketArn;
    public CreateEnvironmentRequestBody withSourceBucketArn(String sourceBucketArn) {
        this.sourceBucketArn = sourceBucketArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateEnvironmentRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebserverAccessMode")
    public CreateEnvironmentRequestBodyWebserverAccessModeEnum webserverAccessMode;
    public CreateEnvironmentRequestBody withWebserverAccessMode(CreateEnvironmentRequestBodyWebserverAccessModeEnum webserverAccessMode) {
        this.webserverAccessMode = webserverAccessMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WeeklyMaintenanceWindowStart")
    public String weeklyMaintenanceWindowStart;
    public CreateEnvironmentRequestBody withWeeklyMaintenanceWindowStart(String weeklyMaintenanceWindowStart) {
        this.weeklyMaintenanceWindowStart = weeklyMaintenanceWindowStart;
        return this;
    }
}