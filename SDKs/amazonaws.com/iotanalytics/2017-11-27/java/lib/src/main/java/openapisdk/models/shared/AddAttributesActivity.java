package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddAttributesActivity
 * An activity that adds other attributes based on existing attributes in the message.
**/
public class AddAttributesActivity {
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public AddAttributesActivity withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AddAttributesActivity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public AddAttributesActivity withNext(String next) {
        this.next = next;
        return this;
    }
}