import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVolumePathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare class DeleteVolume401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteVolumeRequest extends SpeakeasyBase {
    pathParams: DeleteVolumePathParams;
}
export declare class DeleteVolumeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteVolume401ApplicationJSONObject?: DeleteVolume401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
