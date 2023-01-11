package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ScimUserListEnterprise {
    @JsonProperty("Resources")
    public ScimUserListEnterpriseResources[] resources;
    public ScimUserListEnterprise withResources(ScimUserListEnterpriseResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("itemsPerPage")
    public Double itemsPerPage;
    public ScimUserListEnterprise withItemsPerPage(Double itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimUserListEnterprise withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
    @JsonProperty("startIndex")
    public Double startIndex;
    public ScimUserListEnterprise withStartIndex(Double startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @JsonProperty("totalResults")
    public Double totalResults;
    public ScimUserListEnterprise withTotalResults(Double totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}