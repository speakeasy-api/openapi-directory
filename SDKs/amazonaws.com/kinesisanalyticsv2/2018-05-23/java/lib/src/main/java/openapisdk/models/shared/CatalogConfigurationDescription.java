package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CatalogConfigurationDescription
 * The configuration parameters for the default AWS Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.
**/
public class CatalogConfigurationDescription {
    @JsonProperty("GlueDataCatalogConfigurationDescription")
    public GlueDataCatalogConfigurationDescription glueDataCatalogConfigurationDescription;
    public CatalogConfigurationDescription withGlueDataCatalogConfigurationDescription(GlueDataCatalogConfigurationDescription glueDataCatalogConfigurationDescription) {
        this.glueDataCatalogConfigurationDescription = glueDataCatalogConfigurationDescription;
        return this;
    }
}