package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRelationalDatabaseParametersRequest {
    @JsonProperty("parameters")
    public RelationalDatabaseParameter[] parameters;
    public UpdateRelationalDatabaseParametersRequest withParameters(RelationalDatabaseParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;
    public UpdateRelationalDatabaseParametersRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
}