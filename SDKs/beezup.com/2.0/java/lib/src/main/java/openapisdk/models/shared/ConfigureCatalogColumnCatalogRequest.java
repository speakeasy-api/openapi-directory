package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConfigureCatalogColumnCatalogRequest
 * The request to configure a catalog column
**/
public class ConfigureCatalogColumnCatalogRequest {
    @JsonProperty("catalogColumn")
    public CatalogColumn catalogColumn;
    public ConfigureCatalogColumnCatalogRequest withCatalogColumn(CatalogColumn catalogColumn) {
        this.catalogColumn = catalogColumn;
        return this;
    }
}