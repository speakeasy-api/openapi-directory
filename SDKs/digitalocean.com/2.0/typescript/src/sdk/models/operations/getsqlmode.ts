import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSqlModePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class GetSqlMode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sql_mode" })
  sqlMode: string;
}


export class GetSqlMode401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetSqlModeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSqlModePathParams;
}


export class GetSqlModeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSqlMode200ApplicationJSONObject?: GetSqlMode200ApplicationJson;

  @SpeakeasyMetadata()
  getSqlMode401ApplicationJSONObject?: GetSqlMode401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
