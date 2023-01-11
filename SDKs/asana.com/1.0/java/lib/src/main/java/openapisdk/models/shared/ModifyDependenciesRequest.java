package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifyDependenciesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependencies")
    public String[] dependencies;
    public ModifyDependenciesRequest withDependencies(String[] dependencies) {
        this.dependencies = dependencies;
        return this;
    }
}