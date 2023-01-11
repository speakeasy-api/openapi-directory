package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDatabaseRequest {
    @JsonProperty("DatabaseName")
    public String databaseName;
    public DescribeDatabaseRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
}