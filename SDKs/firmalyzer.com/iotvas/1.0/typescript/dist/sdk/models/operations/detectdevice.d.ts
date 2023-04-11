import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DetectDeviceSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
export declare class DetectDeviceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    deviceInfo?: shared.DeviceInfo;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
