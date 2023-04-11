import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateRadiusConfigRequest extends SpeakeasyBase {
    radiusConfigUpdateRequest: shared.RadiusConfigUpdateRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateRadiusConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    radiusConfig?: shared.RadiusConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
