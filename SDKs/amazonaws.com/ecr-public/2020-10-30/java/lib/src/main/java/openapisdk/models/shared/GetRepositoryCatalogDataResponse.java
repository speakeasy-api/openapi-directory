package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRepositoryCatalogDataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogData")
    public RepositoryCatalogData catalogData;
    public GetRepositoryCatalogDataResponse withCatalogData(RepositoryCatalogData catalogData) {
        this.catalogData = catalogData;
        return this;
    }
}