package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RebootRelationalDatabaseRequest {
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;
    public RebootRelationalDatabaseRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
}