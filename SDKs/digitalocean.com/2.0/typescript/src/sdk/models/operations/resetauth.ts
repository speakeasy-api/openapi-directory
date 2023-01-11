import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetAuthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ResetAuthRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysql_settings" })
  mysqlSettings?: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings;
}


export class ResetAuth200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems;
}


export class ResetAuth401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ResetAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetAuthPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ResetAuthRequestBody;
}


export class ResetAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  resetAuth200ApplicationJSONObject?: ResetAuth200ApplicationJson;

  @SpeakeasyMetadata()
  resetAuth401ApplicationJSONObject?: ResetAuth401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
