package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateProductRequest {
    @JsonProperty("name")
    public String name;
    public CreateProductRequest withName(String name) {
        this.name = name;
        return this;
    }
}