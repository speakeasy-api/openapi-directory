import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVolumeActionPathParams extends SpeakeasyBase {
    actionId: number;
    volumeId: string;
}
export declare class GetVolumeActionQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVolumeAction401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetVolumeActionRequest extends SpeakeasyBase {
    pathParams: GetVolumeActionPathParams;
    queryParams: GetVolumeActionQueryParams;
}
export declare class GetVolumeActionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getVolumeAction200ApplicationJSONAny?: any;
    getVolumeAction401ApplicationJSONObject?: GetVolumeAction401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
