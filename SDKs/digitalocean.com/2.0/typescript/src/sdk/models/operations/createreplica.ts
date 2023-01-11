import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateReplicaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class CreateReplicaRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=private_network_uuid" })
  privateNetworkUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class CreateReplica201ApplicationJsonOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replica" })
  replica?: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput;
}


export class CreateReplica401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateReplicaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateReplicaPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateReplicaRequestBodyInput;
}


export class CreateReplicaResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createReplica201ApplicationJSONObject?: CreateReplica201ApplicationJsonOutput;

  @SpeakeasyMetadata()
  createReplica401ApplicationJSONObject?: CreateReplica401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
