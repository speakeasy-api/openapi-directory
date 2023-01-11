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
 * ServiceTemplateSummary
 * The service template summary data.
**/
public class ServiceTemplateSummary {
    @JsonProperty("arn")
    public String arn;
    public ServiceTemplateSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ServiceTemplateSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ServiceTemplateSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ServiceTemplateSummary withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedAt")
    public OffsetDateTime lastModifiedAt;
    public ServiceTemplateSummary withLastModifiedAt(OffsetDateTime lastModifiedAt) {
        this.lastModifiedAt = lastModifiedAt;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ServiceTemplateSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineProvisioning")
    public ProvisioningEnum pipelineProvisioning;
    public ServiceTemplateSummary withPipelineProvisioning(ProvisioningEnum pipelineProvisioning) {
        this.pipelineProvisioning = pipelineProvisioning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendedVersion")
    public String recommendedVersion;
    public ServiceTemplateSummary withRecommendedVersion(String recommendedVersion) {
        this.recommendedVersion = recommendedVersion;
        return this;
    }
}