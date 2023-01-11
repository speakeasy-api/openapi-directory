package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CatalogConfigurationUpdate
 * Updates to 
**/
public class CatalogConfigurationUpdate {
    @JsonProperty("GlueDataCatalogConfigurationUpdate")
    public GlueDataCatalogConfigurationUpdate glueDataCatalogConfigurationUpdate;
    public CatalogConfigurationUpdate withGlueDataCatalogConfigurationUpdate(GlueDataCatalogConfigurationUpdate glueDataCatalogConfigurationUpdate) {
        this.glueDataCatalogConfigurationUpdate = glueDataCatalogConfigurationUpdate;
        return this;
    }
}