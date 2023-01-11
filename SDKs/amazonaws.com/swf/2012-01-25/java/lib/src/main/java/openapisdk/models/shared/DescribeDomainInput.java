package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDomainInput {
    @JsonProperty("name")
    public String name;
    public DescribeDomainInput withName(String name) {
        this.name = name;
        return this;
    }
}