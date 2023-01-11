package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListDatabaseBackups200ApplicationJson {
    @JsonProperty("backups")
    public ListDatabaseBackups200ApplicationJsonBackups[] backups;
    public ListDatabaseBackups200ApplicationJson withBackups(ListDatabaseBackups200ApplicationJsonBackups[] backups) {
        this.backups = backups;
        return this;
    }
}