package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUser200ApplicationJson {
    @JsonProperty("user")
    public openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems user;
    public GetUser200ApplicationJson withUser(openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems user) {
        this.user = user;
        return this;
    }
}