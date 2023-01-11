package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PortSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Definition")
    public String[] definition;
    public PortSet withDefinition(String[] definition) {
        this.definition = definition;
        return this;
    }
}