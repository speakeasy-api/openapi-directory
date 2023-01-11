package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GlueDataCatalogConfigurationUpdate
 * Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
**/
public class GlueDataCatalogConfigurationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseARNUpdate")
    public String databaseARNUpdate;
    public GlueDataCatalogConfigurationUpdate withDatabaseArnUpdate(String databaseARNUpdate) {
        this.databaseARNUpdate = databaseARNUpdate;
        return this;
    }
}