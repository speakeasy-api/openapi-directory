import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchChargeStationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchChargeStation200ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PatchChargeStationRequest extends SpeakeasyBase {
    pathParams: PatchChargeStationPathParams;
    request: shared.Schema1;
}
export declare class PatchChargeStationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patchChargeStation200ApplicationJSONObject?: PatchChargeStation200ApplicationJson;
}
