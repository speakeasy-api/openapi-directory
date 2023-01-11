package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateVersionResponse
 * Provides information about a specific version of a message template.
**/
public class TemplateVersionResponse {
    @JsonProperty("CreationDate")
    public String creationDate;
    public TemplateVersionResponse withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultSubstitutions")
    public String defaultSubstitutions;
    public TemplateVersionResponse withDefaultSubstitutions(String defaultSubstitutions) {
        this.defaultSubstitutions = defaultSubstitutions;
        return this;
    }
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public TemplateVersionResponse withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateDescription")
    public String templateDescription;
    public TemplateVersionResponse withTemplateDescription(String templateDescription) {
        this.templateDescription = templateDescription;
        return this;
    }
    @JsonProperty("TemplateName")
    public String templateName;
    public TemplateVersionResponse withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @JsonProperty("TemplateType")
    public String templateType;
    public TemplateVersionResponse withTemplateType(String templateType) {
        this.templateType = templateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public TemplateVersionResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}