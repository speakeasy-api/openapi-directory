import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVolumeSnapshotByIdPathParams extends SpeakeasyBase {
    snapshotId: any;
}
export declare class GetVolumeSnapshotById401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetVolumeSnapshotByIdRequest extends SpeakeasyBase {
    pathParams: GetVolumeSnapshotByIdPathParams;
}
export declare class GetVolumeSnapshotByIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getVolumeSnapshotById200ApplicationJSONAny?: any;
    getVolumeSnapshotById401ApplicationJSONObject?: GetVolumeSnapshotById401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
