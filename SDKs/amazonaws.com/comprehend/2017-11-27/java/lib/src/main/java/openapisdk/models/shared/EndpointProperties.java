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
 * EndpointProperties
 * Specifies information about the specified endpoint.
**/
public class EndpointProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public EndpointProperties withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentInferenceUnits")
    public Long currentInferenceUnits;
    public EndpointProperties withCurrentInferenceUnits(Long currentInferenceUnits) {
        this.currentInferenceUnits = currentInferenceUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public EndpointProperties withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DesiredInferenceUnits")
    public Long desiredInferenceUnits;
    public EndpointProperties withDesiredInferenceUnits(Long desiredInferenceUnits) {
        this.desiredInferenceUnits = desiredInferenceUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public EndpointProperties withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTime")
    public OffsetDateTime lastModifiedTime;
    public EndpointProperties withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public EndpointProperties withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelArn")
    public String modelArn;
    public EndpointProperties withModelArn(String modelArn) {
        this.modelArn = modelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public EndpointStatusEnum status;
    public EndpointProperties withStatus(EndpointStatusEnum status) {
        this.status = status;
        return this;
    }
}