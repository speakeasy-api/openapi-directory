import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReplicasPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class ListReplicas401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListReplicasRequest extends SpeakeasyBase {
    pathParams: ListReplicasPathParams;
}
export declare class ListReplicasResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listReplicas200ApplicationJSONAny?: any;
    listReplicas401ApplicationJSONObject?: ListReplicas401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
