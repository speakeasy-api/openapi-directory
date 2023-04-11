import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SuspendUserRequestBody extends SpeakeasyBase {
    /**
     * Will send an email with this message when present
     */
    message?: string;
    postAction?: string;
    reason: string;
    suspendUntil: string;
}
export declare class SuspendUserRequest extends SpeakeasyBase {
    requestBody?: SuspendUserRequestBody;
    id: number;
}
export declare class SuspendUser200ApplicationJSONSuspensionSuspendedBy extends SpeakeasyBase {
    avatarTemplate: string;
    id: number;
    name: string;
    username: string;
}
export declare class SuspendUser200ApplicationJSONSuspension extends SpeakeasyBase {
    fullSuspendReason: string;
    suspendReason: string;
    suspendedAt: string;
    suspendedBy: SuspendUser200ApplicationJSONSuspensionSuspendedBy;
    suspendedTill: string;
}
/**
 * response
 */
export declare class SuspendUser200ApplicationJSON extends SpeakeasyBase {
    suspension: SuspendUser200ApplicationJSONSuspension;
}
export declare class SuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    suspendUser200ApplicationJSONObject?: SuspendUser200ApplicationJSON;
}
