package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDatabaseInput {
    @JsonProperty("CatalogName")
    public String catalogName;
    public GetDatabaseInput withCatalogName(String catalogName) {
        this.catalogName = catalogName;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public GetDatabaseInput withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
}