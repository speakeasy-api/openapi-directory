import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DestroyReplicaPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
    replicaName: string;
}
export declare class DestroyReplica401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DestroyReplicaRequest extends SpeakeasyBase {
    pathParams: DestroyReplicaPathParams;
}
export declare class DestroyReplicaResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    destroyReplica401ApplicationJSONObject?: DestroyReplica401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
