package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KeySchemaElement
 * A partition key pair consisting of a name and a type.
**/
public class KeySchemaElement {
    @JsonProperty("Name")
    public String name;
    public KeySchemaElement withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public KeySchemaElement withType(String type) {
        this.type = type;
        return this;
    }
}