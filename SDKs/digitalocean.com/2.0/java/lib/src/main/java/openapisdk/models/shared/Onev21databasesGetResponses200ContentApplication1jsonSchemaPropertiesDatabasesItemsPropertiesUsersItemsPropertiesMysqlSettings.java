package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings {
    @JsonProperty("auth_plugin")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettingsAuthPluginEnum authPlugin;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings withAuthPlugin(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettingsAuthPluginEnum authPlugin) {
        this.authPlugin = authPlugin;
        return this;
    }
}