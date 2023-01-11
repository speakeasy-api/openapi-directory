package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingConfigurationArn")
    public String autoScalingConfigurationArn;
    public CreateServiceRequest withAutoScalingConfigurationArn(String autoScalingConfigurationArn) {
        this.autoScalingConfigurationArn = autoScalingConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public CreateServiceRequest withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckConfiguration")
    public HealthCheckConfiguration healthCheckConfiguration;
    public CreateServiceRequest withHealthCheckConfiguration(HealthCheckConfiguration healthCheckConfiguration) {
        this.healthCheckConfiguration = healthCheckConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceConfiguration")
    public InstanceConfiguration instanceConfiguration;
    public CreateServiceRequest withInstanceConfiguration(InstanceConfiguration instanceConfiguration) {
        this.instanceConfiguration = instanceConfiguration;
        return this;
    }
    @JsonProperty("ServiceName")
    public String serviceName;
    public CreateServiceRequest withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonProperty("SourceConfiguration")
    public SourceConfiguration sourceConfiguration;
    public CreateServiceRequest withSourceConfiguration(SourceConfiguration sourceConfiguration) {
        this.sourceConfiguration = sourceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateServiceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}