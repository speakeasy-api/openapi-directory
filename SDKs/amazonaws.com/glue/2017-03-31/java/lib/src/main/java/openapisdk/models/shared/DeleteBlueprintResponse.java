package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteBlueprintResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DeleteBlueprintResponse withName(String name) {
        this.name = name;
        return this;
    }
}