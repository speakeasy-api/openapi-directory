package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CatalogStoreIndexList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, CatalogStoreIndex> links;
    public CatalogStoreIndexList withLinks(java.util.Map<String, CatalogStoreIndex> links) {
        this.links = links;
        return this;
    }
}