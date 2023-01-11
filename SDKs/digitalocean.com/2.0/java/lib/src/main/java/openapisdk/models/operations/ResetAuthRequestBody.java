package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResetAuthRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysql_settings")
    public openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings mysqlSettings;
    public ResetAuthRequestBody withMysqlSettings(openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings mysqlSettings) {
        this.mysqlSettings = mysqlSettings;
        return this;
    }
}