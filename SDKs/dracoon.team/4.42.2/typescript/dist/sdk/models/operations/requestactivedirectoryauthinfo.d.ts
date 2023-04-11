import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestActiveDirectoryAuthInfoRequest extends SpeakeasyBase {
    /**
     * Show only global available items
     */
    isGlobalAvailable?: boolean;
}
export declare class RequestActiveDirectoryAuthInfoResponse extends SpeakeasyBase {
    /**
     * OK
     */
    activeDirectoryAuthInfo?: shared.ActiveDirectoryAuthInfo;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
