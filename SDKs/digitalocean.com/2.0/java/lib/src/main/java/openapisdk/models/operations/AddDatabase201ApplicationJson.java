package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddDatabase201ApplicationJson {
    @JsonProperty("db")
    public openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems db;
    public AddDatabase201ApplicationJson withDb(openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems db) {
        this.db = db;
        return this;
    }
}