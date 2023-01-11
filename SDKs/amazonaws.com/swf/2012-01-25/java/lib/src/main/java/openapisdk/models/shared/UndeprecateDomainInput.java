package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UndeprecateDomainInput {
    @JsonProperty("name")
    public String name;
    public UndeprecateDomainInput withName(String name) {
        this.name = name;
        return this;
    }
}