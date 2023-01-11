package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CatalogConfiguration
 * The configuration parameters for the default AWS Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
**/
public class CatalogConfiguration {
    @JsonProperty("GlueDataCatalogConfiguration")
    public GlueDataCatalogConfiguration glueDataCatalogConfiguration;
    public CatalogConfiguration withGlueDataCatalogConfiguration(GlueDataCatalogConfiguration glueDataCatalogConfiguration) {
        this.glueDataCatalogConfiguration = glueDataCatalogConfiguration;
        return this;
    }
}