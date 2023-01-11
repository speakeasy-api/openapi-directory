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
 * ApplicationDetail
 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
**/
public class ApplicationDetail {
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public ApplicationDetail withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationConfigurationDescription")
    public ApplicationConfigurationDescription applicationConfigurationDescription;
    public ApplicationDetail withApplicationConfigurationDescription(ApplicationConfigurationDescription applicationConfigurationDescription) {
        this.applicationConfigurationDescription = applicationConfigurationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationDescription")
    public String applicationDescription;
    public ApplicationDetail withApplicationDescription(String applicationDescription) {
        this.applicationDescription = applicationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationMaintenanceConfigurationDescription")
    public ApplicationMaintenanceConfigurationDescription applicationMaintenanceConfigurationDescription;
    public ApplicationDetail withApplicationMaintenanceConfigurationDescription(ApplicationMaintenanceConfigurationDescription applicationMaintenanceConfigurationDescription) {
        this.applicationMaintenanceConfigurationDescription = applicationMaintenanceConfigurationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationMode")
    public ApplicationModeEnum applicationMode;
    public ApplicationDetail withApplicationMode(ApplicationModeEnum applicationMode) {
        this.applicationMode = applicationMode;
        return this;
    }
    @JsonProperty("ApplicationName")
    public String applicationName;
    public ApplicationDetail withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("ApplicationStatus")
    public ApplicationStatusEnum applicationStatus;
    public ApplicationDetail withApplicationStatus(ApplicationStatusEnum applicationStatus) {
        this.applicationStatus = applicationStatus;
        return this;
    }
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public ApplicationDetail withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionRolledBackFrom")
    public Long applicationVersionRolledBackFrom;
    public ApplicationDetail withApplicationVersionRolledBackFrom(Long applicationVersionRolledBackFrom) {
        this.applicationVersionRolledBackFrom = applicationVersionRolledBackFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionRolledBackTo")
    public Long applicationVersionRolledBackTo;
    public ApplicationDetail withApplicationVersionRolledBackTo(Long applicationVersionRolledBackTo) {
        this.applicationVersionRolledBackTo = applicationVersionRolledBackTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionUpdatedFrom")
    public Long applicationVersionUpdatedFrom;
    public ApplicationDetail withApplicationVersionUpdatedFrom(Long applicationVersionUpdatedFrom) {
        this.applicationVersionUpdatedFrom = applicationVersionUpdatedFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptionDescriptions")
    public CloudWatchLoggingOptionDescription[] cloudWatchLoggingOptionDescriptions;
    public ApplicationDetail withCloudWatchLoggingOptionDescriptions(CloudWatchLoggingOptionDescription[] cloudWatchLoggingOptionDescriptions) {
        this.cloudWatchLoggingOptionDescriptions = cloudWatchLoggingOptionDescriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConditionalToken")
    public String conditionalToken;
    public ApplicationDetail withConditionalToken(String conditionalToken) {
        this.conditionalToken = conditionalToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTimestamp")
    public OffsetDateTime createTimestamp;
    public ApplicationDetail withCreateTimestamp(OffsetDateTime createTimestamp) {
        this.createTimestamp = createTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTimestamp")
    public OffsetDateTime lastUpdateTimestamp;
    public ApplicationDetail withLastUpdateTimestamp(OffsetDateTime lastUpdateTimestamp) {
        this.lastUpdateTimestamp = lastUpdateTimestamp;
        return this;
    }
    @JsonProperty("RuntimeEnvironment")
    public RuntimeEnvironmentEnum runtimeEnvironment;
    public ApplicationDetail withRuntimeEnvironment(RuntimeEnvironmentEnum runtimeEnvironment) {
        this.runtimeEnvironment = runtimeEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceExecutionRole")
    public String serviceExecutionRole;
    public ApplicationDetail withServiceExecutionRole(String serviceExecutionRole) {
        this.serviceExecutionRole = serviceExecutionRole;
        return this;
    }
}