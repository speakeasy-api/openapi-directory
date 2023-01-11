package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeprecateDomainInput {
    @JsonProperty("name")
    public String name;
    public DeprecateDomainInput withName(String name) {
        this.name = name;
        return this;
    }
}