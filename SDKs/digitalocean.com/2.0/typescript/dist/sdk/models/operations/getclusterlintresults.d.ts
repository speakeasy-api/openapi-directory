import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClusterlintResultsPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class GetClusterlintResultsQueryParams extends SpeakeasyBase {
    runId?: string;
}
/**
 * Metadata about the Kubernetes API object the diagnostic is reported on.
**/
export declare class GetClusterlintResults200ApplicationJsonDiagnosticsObject extends SpeakeasyBase {
    kind?: string;
    name?: string;
    namespace?: string;
}
export declare class GetClusterlintResults200ApplicationJsonDiagnostics extends SpeakeasyBase {
    checkName?: string;
    message?: string;
    object?: GetClusterlintResults200ApplicationJsonDiagnosticsObject;
    severity?: string;
}
export declare class GetClusterlintResults200ApplicationJson extends SpeakeasyBase {
    completedAt?: Date;
    diagnostics?: GetClusterlintResults200ApplicationJsonDiagnostics[];
    requestedAt?: Date;
    runId?: string;
}
export declare class GetClusterlintResults401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetClusterlintResultsRequest extends SpeakeasyBase {
    pathParams: GetClusterlintResultsPathParams;
    queryParams: GetClusterlintResultsQueryParams;
}
export declare class GetClusterlintResultsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getClusterlintResults200ApplicationJSONObject?: GetClusterlintResults200ApplicationJson;
    getClusterlintResults401ApplicationJSONObject?: GetClusterlintResults401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
