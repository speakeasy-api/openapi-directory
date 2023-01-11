package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GlueDataCatalogConfigurationDescription
 * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
**/
public class GlueDataCatalogConfigurationDescription {
    @JsonProperty("DatabaseARN")
    public String databaseARN;
    public GlueDataCatalogConfigurationDescription withDatabaseArn(String databaseARN) {
        this.databaseARN = databaseARN;
        return this;
    }
}