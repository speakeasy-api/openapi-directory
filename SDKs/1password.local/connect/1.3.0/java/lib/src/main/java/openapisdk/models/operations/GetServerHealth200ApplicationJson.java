package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServerHealth200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependencies")
    public openapisdk.models.shared.ServiceDependency[] dependencies;
    public GetServerHealth200ApplicationJson withDependencies(openapisdk.models.shared.ServiceDependency[] dependencies) {
        this.dependencies = dependencies;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServerHealth200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public GetServerHealth200ApplicationJson withVersion(String version) {
        this.version = version;
        return this;
    }
}