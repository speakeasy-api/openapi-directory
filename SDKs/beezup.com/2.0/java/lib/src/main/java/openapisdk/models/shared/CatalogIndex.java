package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CatalogIndex {
    @JsonProperty("links")
    public CatalogIndexLinks links;
    public CatalogIndex withLinks(CatalogIndexLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("lovLinks")
    public CatalogIndexLovLinks lovLinks;
    public CatalogIndex withLovLinks(CatalogIndexLovLinks lovLinks) {
        this.lovLinks = lovLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeLinks")
    public CatalogStoreIndexList storeLinks;
    public CatalogIndex withStoreLinks(CatalogStoreIndexList storeLinks) {
        this.storeLinks = storeLinks;
        return this;
    }
}