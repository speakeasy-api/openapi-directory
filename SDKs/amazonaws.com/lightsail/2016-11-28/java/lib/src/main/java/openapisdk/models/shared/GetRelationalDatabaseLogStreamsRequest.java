package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRelationalDatabaseLogStreamsRequest {
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;
    public GetRelationalDatabaseLogStreamsRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
}