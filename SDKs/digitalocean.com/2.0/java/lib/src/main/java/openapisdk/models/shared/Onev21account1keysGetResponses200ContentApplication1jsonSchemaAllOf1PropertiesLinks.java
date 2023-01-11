package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public Object pages;
    public Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks withPages(Object pages) {
        this.pages = pages;
        return this;
    }
}