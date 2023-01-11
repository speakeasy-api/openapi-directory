package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormEntry
 * Contains the data submitted for a form.
**/
public class FormEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public FormEntryAttributes attributes;
    public FormEntry withAttributes(FormEntryAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public FormEntry withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public FormEntry withType(String type) {
        this.type = type;
        return this;
    }
}