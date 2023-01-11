import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVolumePathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare class GetVolume401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetVolumeRequest extends SpeakeasyBase {
    pathParams: GetVolumePathParams;
}
export declare class GetVolumeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getVolume200ApplicationJSONAny?: any;
    getVolume401ApplicationJSONObject?: GetVolume401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
