package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure_threshold")
    public Integer failureThreshold;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck withFailureThreshold(Integer failureThreshold) {
        this.failureThreshold = failureThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_path")
    public String httpPath;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck withHttpPath(String httpPath) {
        this.httpPath = httpPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initial_delay_seconds")
    public Integer initialDelaySeconds;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck withInitialDelaySeconds(Integer initialDelaySeconds) {
        this.initialDelaySeconds = initialDelaySeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period_seconds")
    public Integer periodSeconds;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck withPeriodSeconds(Integer periodSeconds) {
        this.periodSeconds = periodSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success_threshold")
    public Integer successThreshold;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck withSuccessThreshold(Integer successThreshold) {
        this.successThreshold = successThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout_seconds")
    public Integer timeoutSeconds;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck withTimeoutSeconds(Integer timeoutSeconds) {
        this.timeoutSeconds = timeoutSeconds;
        return this;
    }
}