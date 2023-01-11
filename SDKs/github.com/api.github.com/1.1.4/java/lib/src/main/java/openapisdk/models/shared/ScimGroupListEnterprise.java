package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ScimGroupListEnterprise {
    @JsonProperty("Resources")
    public ScimGroupListEnterpriseResources[] resources;
    public ScimGroupListEnterprise withResources(ScimGroupListEnterpriseResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("itemsPerPage")
    public Double itemsPerPage;
    public ScimGroupListEnterprise withItemsPerPage(Double itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimGroupListEnterprise withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
    @JsonProperty("startIndex")
    public Double startIndex;
    public ScimGroupListEnterprise withStartIndex(Double startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @JsonProperty("totalResults")
    public Double totalResults;
    public ScimGroupListEnterprise withTotalResults(Double totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}