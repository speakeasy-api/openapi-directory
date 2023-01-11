import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnapshotPathParams extends SpeakeasyBase {
    snapshotId: any;
}
export declare class GetSnapshot401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetSnapshotRequest extends SpeakeasyBase {
    pathParams: GetSnapshotPathParams;
}
export declare class GetSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getSnapshot200ApplicationJSONAny?: any;
    getSnapshot401ApplicationJSONObject?: GetSnapshot401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
