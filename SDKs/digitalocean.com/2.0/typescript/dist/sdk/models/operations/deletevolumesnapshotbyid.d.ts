import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVolumeSnapshotByIdPathParams extends SpeakeasyBase {
    snapshotId: any;
}
export declare class DeleteVolumeSnapshotById401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteVolumeSnapshotByIdRequest extends SpeakeasyBase {
    pathParams: DeleteVolumeSnapshotByIdPathParams;
}
export declare class DeleteVolumeSnapshotByIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteVolumeSnapshotById401ApplicationJSONObject?: DeleteVolumeSnapshotById401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
