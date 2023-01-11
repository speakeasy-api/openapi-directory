package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings {
    @JsonProperty("auth_plugin")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettingsAuthPluginEnum authPlugin;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings withAuthPlugin(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettingsAuthPluginEnum authPlugin) {
        this.authPlugin = authPlugin;
        return this;
    }
}