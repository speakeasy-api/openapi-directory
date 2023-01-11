package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CatalogColumnList {
    @JsonProperty("catalogColumns")
    public CatalogColumn[] catalogColumns;
    public CatalogColumnList withCatalogColumns(CatalogColumn[] catalogColumns) {
        this.catalogColumns = catalogColumns;
        return this;
    }
}