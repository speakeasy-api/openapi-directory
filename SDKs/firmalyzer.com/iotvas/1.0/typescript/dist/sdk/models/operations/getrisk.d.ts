import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRiskSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
export declare class GetRiskRequest extends SpeakeasyBase {
    /**
     * SHA2 hash of device firmware
     */
    firmwareHash: string;
}
export declare class GetRiskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    firmwareRisk?: shared.FirmwareRisk;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
