import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSnapshotPathParams extends SpeakeasyBase {
    snapshotId: any;
}
export declare class DeleteSnapshot401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteSnapshotRequest extends SpeakeasyBase {
    pathParams: DeleteSnapshotPathParams;
}
export declare class DeleteSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteSnapshot401ApplicationJSONObject?: DeleteSnapshot401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
