package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CatalogStoreIndex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CatalogStoreIndexLinks links;
    public CatalogStoreIndex withLinks(CatalogStoreIndexLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CatalogStoreStatusEnum status;
    public CatalogStoreIndex withStatus(CatalogStoreStatusEnum status) {
        this.status = status;
        return this;
    }
}