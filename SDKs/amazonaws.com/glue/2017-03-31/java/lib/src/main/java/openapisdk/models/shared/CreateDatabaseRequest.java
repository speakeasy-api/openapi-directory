package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatabaseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public CreateDatabaseRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseInput")
    public DatabaseInput databaseInput;
    public CreateDatabaseRequest withDatabaseInput(DatabaseInput databaseInput) {
        this.databaseInput = databaseInput;
        return this;
    }
}