package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRepositoryCatalogDataRequest {
    @JsonProperty("catalogData")
    public RepositoryCatalogDataInput catalogData;
    public PutRepositoryCatalogDataRequest withCatalogData(RepositoryCatalogDataInput catalogData) {
        this.catalogData = catalogData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public PutRepositoryCatalogDataRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public PutRepositoryCatalogDataRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}