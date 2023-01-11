package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSystemTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibleNamespaceVersion")
    public Long compatibleNamespaceVersion;
    public UpdateSystemTemplateRequest withCompatibleNamespaceVersion(Long compatibleNamespaceVersion) {
        this.compatibleNamespaceVersion = compatibleNamespaceVersion;
        return this;
    }
    @JsonProperty("definition")
    public DefinitionDocument definition;
    public UpdateSystemTemplateRequest withDefinition(DefinitionDocument definition) {
        this.definition = definition;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public UpdateSystemTemplateRequest withId(String id) {
        this.id = id;
        return this;
    }
}