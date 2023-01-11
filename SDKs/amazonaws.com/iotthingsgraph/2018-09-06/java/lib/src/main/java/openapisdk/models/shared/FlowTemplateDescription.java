package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FlowTemplateDescription
 * An object that contains a workflow's definition and summary information.
**/
public class FlowTemplateDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definition")
    public DefinitionDocument definition;
    public FlowTemplateDescription withDefinition(DefinitionDocument definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public FlowTemplateSummary summary;
    public FlowTemplateDescription withSummary(FlowTemplateSummary summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validatedNamespaceVersion")
    public Long validatedNamespaceVersion;
    public FlowTemplateDescription withValidatedNamespaceVersion(Long validatedNamespaceVersion) {
        this.validatedNamespaceVersion = validatedNamespaceVersion;
        return this;
    }
}