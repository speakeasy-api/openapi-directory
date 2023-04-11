import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchChargeStationRequest extends SpeakeasyBase {
    /**
     * ID of charge station that needs to be updated
     */
    id: string;
    /**
     * Include charge station properties to update here
     */
    schema1: shared.Schema1;
}
/**
 * Returns the updated chargestion object
 */
export declare class PatchChargeStation200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PatchChargeStationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the updated chargestion object
     */
    patchChargeStation200ApplicationJSONObject?: PatchChargeStation200ApplicationJSON;
}
