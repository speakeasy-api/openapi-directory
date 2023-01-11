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
 * ServiceSummary
 * <p>Provides summary information for an AWS App Runner service.</p> <p>This type contains limited information about a service. It doesn't include configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action. Complete service information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html">Service</a> type.</p>
**/
public class ServiceSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public ServiceSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public ServiceSummary withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceId")
    public String serviceId;
    public ServiceSummary withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceName")
    public String serviceName;
    public ServiceSummary withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceUrl")
    public String serviceUrl;
    public ServiceSummary withServiceUrl(String serviceUrl) {
        this.serviceUrl = serviceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ServiceStatusEnum status;
    public ServiceSummary withStatus(ServiceStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedAt")
    public OffsetDateTime updatedAt;
    public ServiceSummary withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}