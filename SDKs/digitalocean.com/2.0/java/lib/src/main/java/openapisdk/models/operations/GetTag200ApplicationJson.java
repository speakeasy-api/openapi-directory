package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTag200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems tag;
    public GetTag200ApplicationJson withTag(openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems tag) {
        this.tag = tag;
        return this;
    }
}