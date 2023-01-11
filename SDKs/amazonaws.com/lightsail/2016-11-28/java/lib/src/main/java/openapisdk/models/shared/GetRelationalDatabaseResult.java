package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabase")
    public RelationalDatabase relationalDatabase;
    public GetRelationalDatabaseResult withRelationalDatabase(RelationalDatabase relationalDatabase) {
        this.relationalDatabase = relationalDatabase;
        return this;
    }
}