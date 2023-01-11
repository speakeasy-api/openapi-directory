package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysql_settings")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings mysqlSettings;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsInput withMysqlSettings(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings mysqlSettings) {
        this.mysqlSettings = mysqlSettings;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsInput withName(String name) {
        this.name = name;
        return this;
    }
}