package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationSummary
 * Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
**/
public class ApplicationSummary {
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public ApplicationSummary withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationMode")
    public ApplicationModeEnum applicationMode;
    public ApplicationSummary withApplicationMode(ApplicationModeEnum applicationMode) {
        this.applicationMode = applicationMode;
        return this;
    }
    @JsonProperty("ApplicationName")
    public String applicationName;
    public ApplicationSummary withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("ApplicationStatus")
    public ApplicationStatusEnum applicationStatus;
    public ApplicationSummary withApplicationStatus(ApplicationStatusEnum applicationStatus) {
        this.applicationStatus = applicationStatus;
        return this;
    }
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public ApplicationSummary withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
    @JsonProperty("RuntimeEnvironment")
    public RuntimeEnvironmentEnum runtimeEnvironment;
    public ApplicationSummary withRuntimeEnvironment(RuntimeEnvironmentEnum runtimeEnvironment) {
        this.runtimeEnvironment = runtimeEnvironment;
        return this;
    }
}