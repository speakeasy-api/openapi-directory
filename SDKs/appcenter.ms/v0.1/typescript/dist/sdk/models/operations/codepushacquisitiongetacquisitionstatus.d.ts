import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Error
 */
export declare class CodePushAcquisitionGetAcquisitionStatusDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Success
 */
export declare class CodePushAcquisitionGetAcquisitionStatus200ApplicationJSON extends SpeakeasyBase {
    /**
     * The code indicating the status
     */
    code: string;
    /**
     * The message indicating the status
     */
    message: string;
}
export declare class CodePushAcquisitionGetAcquisitionStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    codePushAcquisitionGetAcquisitionStatus200ApplicationJSONObject?: CodePushAcquisitionGetAcquisitionStatus200ApplicationJSON;
    /**
     * Error
     */
    codePushAcquisitionGetAcquisitionStatusDefaultApplicationJSONObject?: CodePushAcquisitionGetAcquisitionStatusDefaultApplicationJSON;
}
