package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateServiceTemplateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateServiceTemplateInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UpdateServiceTemplateInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateServiceTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
}