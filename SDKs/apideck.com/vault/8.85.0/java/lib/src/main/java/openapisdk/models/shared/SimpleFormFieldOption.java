package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SimpleFormFieldOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public SimpleFormFieldOption withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Object value;
    public SimpleFormFieldOption withValue(Object value) {
        this.value = value;
        return this;
    }
}