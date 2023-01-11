package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRelationalDatabaseRequest {
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;
    public GetRelationalDatabaseRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
}