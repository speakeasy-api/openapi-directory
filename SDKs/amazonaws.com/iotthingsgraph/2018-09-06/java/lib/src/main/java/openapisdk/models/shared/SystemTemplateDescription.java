package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SystemTemplateDescription
 * An object that contains a system's definition document and summary information.
**/
public class SystemTemplateDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definition")
    public DefinitionDocument definition;
    public SystemTemplateDescription withDefinition(DefinitionDocument definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public SystemTemplateSummary summary;
    public SystemTemplateDescription withSummary(SystemTemplateSummary summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validatedNamespaceVersion")
    public Long validatedNamespaceVersion;
    public SystemTemplateDescription withValidatedNamespaceVersion(Long validatedNamespaceVersion) {
        this.validatedNamespaceVersion = validatedNamespaceVersion;
        return this;
    }
}