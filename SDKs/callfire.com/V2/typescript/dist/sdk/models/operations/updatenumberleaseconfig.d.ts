import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateNumberLeaseConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateNumberLeaseConfigRequest extends SpeakeasyBase {
    /**
     * The configuration of a number lease object. There are two available types of configuration: IVR, TRACKING
     */
    numberConfig?: shared.NumberConfig;
    /**
     * A phone number in E.164 format (11-digit) which needs to be verified. Example: 12132000384
     */
    number: string;
}
export declare class UpdateNumberLeaseConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
