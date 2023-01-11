package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HealthCheckRead {
    @JsonProperty("db")
    public Boolean db;
    public HealthCheckRead withDb(Boolean db) {
        this.db = db;
        return this;
    }
}