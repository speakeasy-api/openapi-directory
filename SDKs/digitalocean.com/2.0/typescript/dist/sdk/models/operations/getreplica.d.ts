import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReplicaPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
    replicaName: string;
}
export declare class GetReplica200ApplicationJsonOutput extends SpeakeasyBase {
    replica?: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput;
}
export declare class GetReplica401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetReplicaRequest extends SpeakeasyBase {
    pathParams: GetReplicaPathParams;
}
export declare class GetReplicaResponseOutput extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getReplica200ApplicationJSONObject?: GetReplica200ApplicationJsonOutput;
    getReplica401ApplicationJSONObject?: GetReplica401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
