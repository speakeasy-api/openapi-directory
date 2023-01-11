package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFlowTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibleNamespaceVersion")
    public Long compatibleNamespaceVersion;
    public CreateFlowTemplateRequest withCompatibleNamespaceVersion(Long compatibleNamespaceVersion) {
        this.compatibleNamespaceVersion = compatibleNamespaceVersion;
        return this;
    }
    @JsonProperty("definition")
    public DefinitionDocument definition;
    public CreateFlowTemplateRequest withDefinition(DefinitionDocument definition) {
        this.definition = definition;
        return this;
    }
}