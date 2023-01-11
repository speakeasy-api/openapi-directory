package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDatabaseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Database")
    public Database database;
    public GetDatabaseResponse withDatabase(Database database) {
        this.database = database;
        return this;
    }
}