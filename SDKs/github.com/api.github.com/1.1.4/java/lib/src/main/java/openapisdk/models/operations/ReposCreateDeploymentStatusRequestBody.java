package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateDeploymentStatusRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_inactive")
    public Boolean autoInactive;
    public ReposCreateDeploymentStatusRequestBody withAutoInactive(Boolean autoInactive) {
        this.autoInactive = autoInactive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReposCreateDeploymentStatusRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public ReposCreateDeploymentStatusRequestBodyEnvironmentEnum environment;
    public ReposCreateDeploymentStatusRequestBody withEnvironment(ReposCreateDeploymentStatusRequestBodyEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment_url")
    public String environmentUrl;
    public ReposCreateDeploymentStatusRequestBody withEnvironmentUrl(String environmentUrl) {
        this.environmentUrl = environmentUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("log_url")
    public String logUrl;
    public ReposCreateDeploymentStatusRequestBody withLogUrl(String logUrl) {
        this.logUrl = logUrl;
        return this;
    }
    @JsonProperty("state")
    public ReposCreateDeploymentStatusRequestBodyStateEnum state;
    public ReposCreateDeploymentStatusRequestBody withState(ReposCreateDeploymentStatusRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_url")
    public String targetUrl;
    public ReposCreateDeploymentStatusRequestBody withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
}