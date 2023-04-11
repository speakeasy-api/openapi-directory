import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAdConfigRequest extends SpeakeasyBase {
    updateActiveDirectoryConfigRequest: shared.UpdateActiveDirectoryConfigRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Active Directory ID
     */
    adId: number;
}
export declare class UpdateAdConfigResponse extends SpeakeasyBase {
    /**
     * OK
     */
    activeDirectoryConfig?: shared.ActiveDirectoryConfig;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
