package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListKubernetesOptions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Object options;
    public ListKubernetesOptions200ApplicationJson withOptions(Object options) {
        this.options = options;
        return this;
    }
}