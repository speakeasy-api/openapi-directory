package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartRelationalDatabaseRequest {
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;
    public StartRelationalDatabaseRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
}