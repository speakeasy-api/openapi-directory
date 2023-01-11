package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormEntryField
 * Attributes of the form including its included fields and css styles
**/
public class FormEntryField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FormEntryField withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public Integer order;
    public FormEntryField withOrder(Integer order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public FormEntryField withValue(String value) {
        this.value = value;
        return this;
    }
}