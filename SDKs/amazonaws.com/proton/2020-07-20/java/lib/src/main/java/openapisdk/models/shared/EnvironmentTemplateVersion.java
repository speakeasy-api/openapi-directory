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
 * EnvironmentTemplateVersion
 * The environment template version data.
**/
public class EnvironmentTemplateVersion {
    @JsonProperty("arn")
    public String arn;
    public EnvironmentTemplateVersion withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public EnvironmentTemplateVersion withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EnvironmentTemplateVersion withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedAt")
    public OffsetDateTime lastModifiedAt;
    public EnvironmentTemplateVersion withLastModifiedAt(OffsetDateTime lastModifiedAt) {
        this.lastModifiedAt = lastModifiedAt;
        return this;
    }
    @JsonProperty("majorVersion")
    public String majorVersion;
    public EnvironmentTemplateVersion withMajorVersion(String majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonProperty("minorVersion")
    public String minorVersion;
    public EnvironmentTemplateVersion withMinorVersion(String minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendedMinorVersion")
    public String recommendedMinorVersion;
    public EnvironmentTemplateVersion withRecommendedMinorVersion(String recommendedMinorVersion) {
        this.recommendedMinorVersion = recommendedMinorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public EnvironmentTemplateVersion withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    @JsonProperty("status")
    public TemplateVersionStatusEnum status;
    public EnvironmentTemplateVersion withStatus(TemplateVersionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public EnvironmentTemplateVersion withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public EnvironmentTemplateVersion withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}