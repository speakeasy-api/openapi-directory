package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTableRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public UpdateTableRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public UpdateTableRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SkipArchive")
    public Boolean skipArchive;
    public UpdateTableRequest withSkipArchive(Boolean skipArchive) {
        this.skipArchive = skipArchive;
        return this;
    }
    @JsonProperty("TableInput")
    public TableInput tableInput;
    public UpdateTableRequest withTableInput(TableInput tableInput) {
        this.tableInput = tableInput;
        return this;
    }
}