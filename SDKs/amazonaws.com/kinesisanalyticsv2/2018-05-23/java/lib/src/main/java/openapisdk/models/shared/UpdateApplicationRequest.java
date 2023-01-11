package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApplicationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationConfigurationUpdate")
    public ApplicationConfigurationUpdate applicationConfigurationUpdate;
    public UpdateApplicationRequest withApplicationConfigurationUpdate(ApplicationConfigurationUpdate applicationConfigurationUpdate) {
        this.applicationConfigurationUpdate = applicationConfigurationUpdate;
        return this;
    }
    @JsonProperty("ApplicationName")
    public String applicationName;
    public UpdateApplicationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptionUpdates")
    public CloudWatchLoggingOptionUpdate[] cloudWatchLoggingOptionUpdates;
    public UpdateApplicationRequest withCloudWatchLoggingOptionUpdates(CloudWatchLoggingOptionUpdate[] cloudWatchLoggingOptionUpdates) {
        this.cloudWatchLoggingOptionUpdates = cloudWatchLoggingOptionUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConditionalToken")
    public String conditionalToken;
    public UpdateApplicationRequest withConditionalToken(String conditionalToken) {
        this.conditionalToken = conditionalToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public UpdateApplicationRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunConfigurationUpdate")
    public RunConfigurationUpdate runConfigurationUpdate;
    public UpdateApplicationRequest withRunConfigurationUpdate(RunConfigurationUpdate runConfigurationUpdate) {
        this.runConfigurationUpdate = runConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceExecutionRoleUpdate")
    public String serviceExecutionRoleUpdate;
    public UpdateApplicationRequest withServiceExecutionRoleUpdate(String serviceExecutionRoleUpdate) {
        this.serviceExecutionRoleUpdate = serviceExecutionRoleUpdate;
        return this;
    }
}