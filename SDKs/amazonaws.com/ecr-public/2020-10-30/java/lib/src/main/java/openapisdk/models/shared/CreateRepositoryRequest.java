package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRepositoryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogData")
    public RepositoryCatalogDataInput catalogData;
    public CreateRepositoryRequest withCatalogData(RepositoryCatalogDataInput catalogData) {
        this.catalogData = catalogData;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public CreateRepositoryRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateRepositoryRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}