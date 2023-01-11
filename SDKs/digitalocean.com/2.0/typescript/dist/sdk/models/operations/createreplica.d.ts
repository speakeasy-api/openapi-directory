import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateReplicaPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class CreateReplicaRequestBodyInput extends SpeakeasyBase {
    name: string;
    privateNetworkUuid?: string;
    region?: string;
    size: string;
    tags?: string[];
}
export declare class CreateReplica201ApplicationJsonOutput extends SpeakeasyBase {
    replica?: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput;
}
export declare class CreateReplica401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateReplicaRequest extends SpeakeasyBase {
    pathParams: CreateReplicaPathParams;
    request?: CreateReplicaRequestBodyInput;
}
export declare class CreateReplicaResponseOutput extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createReplica201ApplicationJSONObject?: CreateReplica201ApplicationJsonOutput;
    createReplica401ApplicationJSONObject?: CreateReplica401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
