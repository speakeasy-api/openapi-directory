package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRegistryRepositories200ApplicationJsonRepositories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_tag")
    public ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag latestTag;
    public ListRegistryRepositories200ApplicationJsonRepositories withLatestTag(ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag latestTag) {
        this.latestTag = latestTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListRegistryRepositories200ApplicationJsonRepositories withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry_name")
    public String registryName;
    public ListRegistryRepositories200ApplicationJsonRepositories withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag_count")
    public Long tagCount;
    public ListRegistryRepositories200ApplicationJsonRepositories withTagCount(Long tagCount) {
        this.tagCount = tagCount;
        return this;
    }
}