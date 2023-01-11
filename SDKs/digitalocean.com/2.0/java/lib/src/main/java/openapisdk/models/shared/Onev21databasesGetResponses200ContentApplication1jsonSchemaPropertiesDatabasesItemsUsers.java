package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysql_settings")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings mysqlSettings;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers withMysqlSettings(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings mysqlSettings) {
        this.mysqlSettings = mysqlSettings;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum role;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers withRole(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum role) {
        this.role = role;
        return this;
    }
}