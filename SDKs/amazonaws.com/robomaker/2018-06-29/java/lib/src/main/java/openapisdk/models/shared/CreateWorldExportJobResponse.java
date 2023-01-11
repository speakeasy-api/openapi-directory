package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateWorldExportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public CreateWorldExportJobResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateWorldExportJobResponse withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public CreateWorldExportJobResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCode")
    public WorldExportJobErrorCodeEnum failureCode;
    public CreateWorldExportJobResponse withFailureCode(WorldExportJobErrorCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamRole")
    public String iamRole;
    public CreateWorldExportJobResponse withIamRole(String iamRole) {
        this.iamRole = iamRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputLocation")
    public OutputLocation outputLocation;
    public CreateWorldExportJobResponse withOutputLocation(OutputLocation outputLocation) {
        this.outputLocation = outputLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WorldExportJobStatusEnum status;
    public CreateWorldExportJobResponse withStatus(WorldExportJobStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateWorldExportJobResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}