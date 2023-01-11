package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRepositoryCatalogDataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogData")
    public RepositoryCatalogData catalogData;
    public PutRepositoryCatalogDataResponse withCatalogData(RepositoryCatalogData catalogData) {
        this.catalogData = catalogData;
        return this;
    }
}