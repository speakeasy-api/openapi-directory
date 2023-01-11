package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveAttributesActivity
 * An activity that removes attributes from a message.
**/
public class RemoveAttributesActivity {
    @JsonProperty("attributes")
    public String[] attributes;
    public RemoveAttributesActivity withAttributes(String[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RemoveAttributesActivity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public RemoveAttributesActivity withNext(String next) {
        this.next = next;
        return this;
    }
}