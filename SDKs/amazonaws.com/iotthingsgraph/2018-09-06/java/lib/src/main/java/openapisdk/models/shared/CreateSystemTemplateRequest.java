package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSystemTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibleNamespaceVersion")
    public Long compatibleNamespaceVersion;
    public CreateSystemTemplateRequest withCompatibleNamespaceVersion(Long compatibleNamespaceVersion) {
        this.compatibleNamespaceVersion = compatibleNamespaceVersion;
        return this;
    }
    @JsonProperty("definition")
    public DefinitionDocument definition;
    public CreateSystemTemplateRequest withDefinition(DefinitionDocument definition) {
        this.definition = definition;
        return this;
    }
}