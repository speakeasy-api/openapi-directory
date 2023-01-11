package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ScimUserList
 * SCIM User List
**/
public class ScimUserList {
    @JsonProperty("Resources")
    public ScimUser[] resources;
    public ScimUserList withResources(ScimUser[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("itemsPerPage")
    public Long itemsPerPage;
    public ScimUserList withItemsPerPage(Long itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimUserList withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
    @JsonProperty("startIndex")
    public Long startIndex;
    public ScimUserList withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @JsonProperty("totalResults")
    public Long totalResults;
    public ScimUserList withTotalResults(Long totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}