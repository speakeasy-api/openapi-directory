package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllEnvironments200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public AllEnvironments200ApplicationJsonEnvironments[] environments;
    public AllEnvironments200ApplicationJson withEnvironments(AllEnvironments200ApplicationJsonEnvironments[] environments) {
        this.environments = environments;
        return this;
    }
}