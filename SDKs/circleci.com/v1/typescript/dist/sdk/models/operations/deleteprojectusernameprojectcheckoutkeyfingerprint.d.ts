import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest extends SpeakeasyBase {
    /**
     * XXXXXXXXXX
     *
     * @remarks
     *
     */
    fingerprint: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    project: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    username: string;
}
export declare enum DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum {
    Ok = "OK"
}
/**
 * status message
 */
export declare class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON extends SpeakeasyBase {
    message?: DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum;
}
export declare class DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * status message
     */
    deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONObject?: DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON;
}
