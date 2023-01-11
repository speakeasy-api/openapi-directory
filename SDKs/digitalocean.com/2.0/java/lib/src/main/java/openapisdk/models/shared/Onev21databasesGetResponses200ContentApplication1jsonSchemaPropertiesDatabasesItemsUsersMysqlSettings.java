package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings {
    @JsonProperty("auth_plugin")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum authPlugin;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings withAuthPlugin(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum authPlugin) {
        this.authPlugin = authPlugin;
        return this;
    }
}