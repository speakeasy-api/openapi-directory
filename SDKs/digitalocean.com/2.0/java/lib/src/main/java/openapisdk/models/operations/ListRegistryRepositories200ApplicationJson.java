package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRegistryRepositories200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListRegistryRepositories200ApplicationJsonLinks links;
    public ListRegistryRepositories200ApplicationJson withLinks(ListRegistryRepositories200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListRegistryRepositories200ApplicationJsonMeta meta;
    public ListRegistryRepositories200ApplicationJson withMeta(ListRegistryRepositories200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositories")
    public ListRegistryRepositories200ApplicationJsonRepositories[] repositories;
    public ListRegistryRepositories200ApplicationJson withRepositories(ListRegistryRepositories200ApplicationJsonRepositories[] repositories) {
        this.repositories = repositories;
        return this;
    }
}