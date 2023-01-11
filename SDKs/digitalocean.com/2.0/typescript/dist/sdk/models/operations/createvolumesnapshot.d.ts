import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVolumeSnapshotPathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare class CreateVolumeSnapshot401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateVolumeSnapshotRequest extends SpeakeasyBase {
    pathParams: CreateVolumeSnapshotPathParams;
    request: any;
}
export declare class CreateVolumeSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createVolumeSnapshot201ApplicationJSONAny?: any;
    createVolumeSnapshot401ApplicationJSONObject?: CreateVolumeSnapshot401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
