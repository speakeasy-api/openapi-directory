package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDatabaseRequest {
    @JsonProperty("DatabaseName")
    public String databaseName;
    public DeleteDatabaseRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
}