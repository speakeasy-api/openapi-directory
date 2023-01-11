package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateDatabaseCluster201ApplicationJson {
    @JsonProperty("database")
    public openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems database;
    public CreateDatabaseCluster201ApplicationJson withDatabase(openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems database) {
        this.database = database;
        return this;
    }
}