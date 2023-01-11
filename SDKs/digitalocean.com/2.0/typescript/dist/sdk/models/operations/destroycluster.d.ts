import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DestroyClusterPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class DestroyCluster401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DestroyClusterRequest extends SpeakeasyBase {
    pathParams: DestroyClusterPathParams;
}
export declare class DestroyClusterResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    destroyCluster401ApplicationJSONObject?: DestroyCluster401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
