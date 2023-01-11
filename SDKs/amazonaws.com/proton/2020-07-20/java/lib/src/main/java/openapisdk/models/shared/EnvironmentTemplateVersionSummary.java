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
 * EnvironmentTemplateVersionSummary
 * A summary of the version of an environment template detail data.
**/
public class EnvironmentTemplateVersionSummary {
    @JsonProperty("arn")
    public String arn;
    public EnvironmentTemplateVersionSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public EnvironmentTemplateVersionSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EnvironmentTemplateVersionSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedAt")
    public OffsetDateTime lastModifiedAt;
    public EnvironmentTemplateVersionSummary withLastModifiedAt(OffsetDateTime lastModifiedAt) {
        this.lastModifiedAt = lastModifiedAt;
        return this;
    }
    @JsonProperty("majorVersion")
    public String majorVersion;
    public EnvironmentTemplateVersionSummary withMajorVersion(String majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonProperty("minorVersion")
    public String minorVersion;
    public EnvironmentTemplateVersionSummary withMinorVersion(String minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendedMinorVersion")
    public String recommendedMinorVersion;
    public EnvironmentTemplateVersionSummary withRecommendedMinorVersion(String recommendedMinorVersion) {
        this.recommendedMinorVersion = recommendedMinorVersion;
        return this;
    }
    @JsonProperty("status")
    public TemplateVersionStatusEnum status;
    public EnvironmentTemplateVersionSummary withStatus(TemplateVersionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public EnvironmentTemplateVersionSummary withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public EnvironmentTemplateVersionSummary withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}