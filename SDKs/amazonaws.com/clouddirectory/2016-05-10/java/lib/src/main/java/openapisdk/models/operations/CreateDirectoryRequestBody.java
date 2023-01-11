package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateDirectoryRequestBody {
    @JsonProperty("Name")
    public String name;
    public CreateDirectoryRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}