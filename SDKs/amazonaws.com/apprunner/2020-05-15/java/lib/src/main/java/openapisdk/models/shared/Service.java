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
 * Service
 * <p>Describes an AWS App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p>
**/
public class Service {
    @JsonProperty("AutoScalingConfigurationSummary")
    public AutoScalingConfigurationSummary autoScalingConfigurationSummary;
    public Service withAutoScalingConfigurationSummary(AutoScalingConfigurationSummary autoScalingConfigurationSummary) {
        this.autoScalingConfigurationSummary = autoScalingConfigurationSummary;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public Service withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeletedAt")
    public OffsetDateTime deletedAt;
    public Service withDeletedAt(OffsetDateTime deletedAt) {
        this.deletedAt = deletedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public Service withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckConfiguration")
    public HealthCheckConfiguration healthCheckConfiguration;
    public Service withHealthCheckConfiguration(HealthCheckConfiguration healthCheckConfiguration) {
        this.healthCheckConfiguration = healthCheckConfiguration;
        return this;
    }
    @JsonProperty("InstanceConfiguration")
    public InstanceConfiguration instanceConfiguration;
    public Service withInstanceConfiguration(InstanceConfiguration instanceConfiguration) {
        this.instanceConfiguration = instanceConfiguration;
        return this;
    }
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public Service withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
    @JsonProperty("ServiceId")
    public String serviceId;
    public Service withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonProperty("ServiceName")
    public String serviceName;
    public Service withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonProperty("ServiceUrl")
    public String serviceUrl;
    public Service withServiceUrl(String serviceUrl) {
        this.serviceUrl = serviceUrl;
        return this;
    }
    @JsonProperty("SourceConfiguration")
    public SourceConfiguration sourceConfiguration;
    public Service withSourceConfiguration(SourceConfiguration sourceConfiguration) {
        this.sourceConfiguration = sourceConfiguration;
        return this;
    }
    @JsonProperty("Status")
    public ServiceStatusEnum status;
    public Service withStatus(ServiceStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdatedAt")
    public OffsetDateTime updatedAt;
    public Service withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}