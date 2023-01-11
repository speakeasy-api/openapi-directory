package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingConfigurationArn")
    public String autoScalingConfigurationArn;
    public UpdateServiceRequest withAutoScalingConfigurationArn(String autoScalingConfigurationArn) {
        this.autoScalingConfigurationArn = autoScalingConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckConfiguration")
    public HealthCheckConfiguration healthCheckConfiguration;
    public UpdateServiceRequest withHealthCheckConfiguration(HealthCheckConfiguration healthCheckConfiguration) {
        this.healthCheckConfiguration = healthCheckConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceConfiguration")
    public InstanceConfiguration instanceConfiguration;
    public UpdateServiceRequest withInstanceConfiguration(InstanceConfiguration instanceConfiguration) {
        this.instanceConfiguration = instanceConfiguration;
        return this;
    }
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public UpdateServiceRequest withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceConfiguration")
    public SourceConfiguration sourceConfiguration;
    public UpdateServiceRequest withSourceConfiguration(SourceConfiguration sourceConfiguration) {
        this.sourceConfiguration = sourceConfiguration;
        return this;
    }
}