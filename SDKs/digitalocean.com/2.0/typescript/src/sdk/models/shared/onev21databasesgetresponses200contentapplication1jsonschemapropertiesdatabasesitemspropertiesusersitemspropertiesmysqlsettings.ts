import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettingsAuthPluginEnum {
    MysqlNativePassword = "mysql_native_password",
    CachingSha2Password = "caching_sha2_password"
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_plugin" })
  authPlugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettingsAuthPluginEnum;
}
