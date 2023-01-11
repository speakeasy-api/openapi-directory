package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinksPages2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public String first;
    public Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinksPages2 withFirst(String first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinksPages2 withPrev(String prev) {
        this.prev = prev;
        return this;
    }
}