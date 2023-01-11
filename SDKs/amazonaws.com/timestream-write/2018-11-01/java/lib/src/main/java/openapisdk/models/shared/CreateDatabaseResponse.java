package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatabaseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Database")
    public Database database;
    public CreateDatabaseResponse withDatabase(Database database) {
        this.database = database;
        return this;
    }
}