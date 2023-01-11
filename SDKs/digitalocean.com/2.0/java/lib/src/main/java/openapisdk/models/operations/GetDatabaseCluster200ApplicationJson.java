package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDatabaseCluster200ApplicationJson {
    @JsonProperty("database")
    public openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems database;
    public GetDatabaseCluster200ApplicationJson withDatabase(openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems database) {
        this.database = database;
        return this;
    }
}