package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinksPages1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public String last;
    public Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinksPages1 withLast(String last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinksPages1 withNext(String next) {
        this.next = next;
        return this;
    }
}