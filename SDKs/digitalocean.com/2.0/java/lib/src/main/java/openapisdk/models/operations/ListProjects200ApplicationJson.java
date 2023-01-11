package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProjects200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListProjects200ApplicationJsonLinks links;
    public ListProjects200ApplicationJson withLinks(ListProjects200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListProjects200ApplicationJsonMeta meta;
    public ListProjects200ApplicationJson withMeta(ListProjects200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projects")
    public ListProjects200ApplicationJsonProjects[] projects;
    public ListProjects200ApplicationJson withProjects(ListProjects200ApplicationJsonProjects[] projects) {
        this.projects = projects;
        return this;
    }
}