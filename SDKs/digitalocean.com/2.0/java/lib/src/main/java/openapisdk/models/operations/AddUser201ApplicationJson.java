package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddUser201ApplicationJson {
    @JsonProperty("user")
    public openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems user;
    public AddUser201ApplicationJson withUser(openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems user) {
        this.user = user;
        return this;
    }
}