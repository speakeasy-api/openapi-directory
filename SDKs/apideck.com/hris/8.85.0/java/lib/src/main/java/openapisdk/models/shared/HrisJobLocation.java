package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HrisJobLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public HrisJobLocation withName(String name) {
        this.name = name;
        return this;
    }
}