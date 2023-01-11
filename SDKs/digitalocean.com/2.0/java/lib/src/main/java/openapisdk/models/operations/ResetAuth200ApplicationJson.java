package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResetAuth200ApplicationJson {
    @JsonProperty("user")
    public openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems user;
    public ResetAuth200ApplicationJson withUser(openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems user) {
        this.user = user;
        return this;
    }
}