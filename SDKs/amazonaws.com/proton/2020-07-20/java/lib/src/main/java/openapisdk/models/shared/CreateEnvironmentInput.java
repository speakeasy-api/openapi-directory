package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnvironmentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateEnvironmentInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentAccountConnectionId")
    public String environmentAccountConnectionId;
    public CreateEnvironmentInput withEnvironmentAccountConnectionId(String environmentAccountConnectionId) {
        this.environmentAccountConnectionId = environmentAccountConnectionId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateEnvironmentInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protonServiceRoleArn")
    public String protonServiceRoleArn;
    public CreateEnvironmentInput withProtonServiceRoleArn(String protonServiceRoleArn) {
        this.protonServiceRoleArn = protonServiceRoleArn;
        return this;
    }
    @JsonProperty("spec")
    public String spec;
    public CreateEnvironmentInput withSpec(String spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateEnvironmentInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("templateMajorVersion")
    public String templateMajorVersion;
    public CreateEnvironmentInput withTemplateMajorVersion(String templateMajorVersion) {
        this.templateMajorVersion = templateMajorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateMinorVersion")
    public String templateMinorVersion;
    public CreateEnvironmentInput withTemplateMinorVersion(String templateMinorVersion) {
        this.templateMinorVersion = templateMinorVersion;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public CreateEnvironmentInput withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}