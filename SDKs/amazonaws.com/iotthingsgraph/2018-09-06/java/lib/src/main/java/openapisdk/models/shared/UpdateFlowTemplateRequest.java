package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFlowTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibleNamespaceVersion")
    public Long compatibleNamespaceVersion;
    public UpdateFlowTemplateRequest withCompatibleNamespaceVersion(Long compatibleNamespaceVersion) {
        this.compatibleNamespaceVersion = compatibleNamespaceVersion;
        return this;
    }
    @JsonProperty("definition")
    public DefinitionDocument definition;
    public UpdateFlowTemplateRequest withDefinition(DefinitionDocument definition) {
        this.definition = definition;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public UpdateFlowTemplateRequest withId(String id) {
        this.id = id;
        return this;
    }
}