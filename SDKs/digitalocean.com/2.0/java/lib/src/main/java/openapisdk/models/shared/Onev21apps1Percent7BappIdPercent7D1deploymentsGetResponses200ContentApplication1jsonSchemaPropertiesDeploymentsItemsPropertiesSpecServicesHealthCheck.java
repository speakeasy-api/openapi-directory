package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure_threshold")
    public Integer failureThreshold;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck withFailureThreshold(Integer failureThreshold) {
        this.failureThreshold = failureThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_path")
    public String httpPath;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck withHttpPath(String httpPath) {
        this.httpPath = httpPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initial_delay_seconds")
    public Integer initialDelaySeconds;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck withInitialDelaySeconds(Integer initialDelaySeconds) {
        this.initialDelaySeconds = initialDelaySeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period_seconds")
    public Integer periodSeconds;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck withPeriodSeconds(Integer periodSeconds) {
        this.periodSeconds = periodSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success_threshold")
    public Integer successThreshold;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck withSuccessThreshold(Integer successThreshold) {
        this.successThreshold = successThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout_seconds")
    public Integer timeoutSeconds;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck withTimeoutSeconds(Integer timeoutSeconds) {
        this.timeoutSeconds = timeoutSeconds;
        return this;
    }
}