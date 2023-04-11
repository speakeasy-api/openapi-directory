import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSystemDefaultsRequest extends SpeakeasyBase {
    updateSystemDefaults: shared.UpdateSystemDefaults;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateSystemDefaultsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    systemDefaults?: shared.SystemDefaults;
}
