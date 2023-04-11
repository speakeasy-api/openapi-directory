import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSigninSigninIdRequest extends SpeakeasyBase {
    /**
     * The ID of the signin record to be deleted.
     */
    signinId: number;
}
export declare class DeleteSigninSigninIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    invalidToken?: shared.InvalidToken;
}
