package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CatalogIndexLinks {
    @JsonProperty("beezUPColumns")
    public LinksCatalogGetBeezUpColumnsLink beezUPColumns;
    public CatalogIndexLinks withBeezUpColumns(LinksCatalogGetBeezUpColumnsLink beezUPColumns) {
        this.beezUPColumns = beezUPColumns;
        return this;
    }
    @JsonProperty("self")
    public LinksCatalogIndexLink self;
    public CatalogIndexLinks withSelf(LinksCatalogIndexLink self) {
        this.self = self;
        return this;
    }
}