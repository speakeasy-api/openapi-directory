import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUserUserIdRequest extends SpeakeasyBase {
    /**
     * The ID of the user record to be deleted.
     */
    userId: number;
}
export declare class DeleteUserUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    invalidToken?: shared.InvalidToken;
}
