import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersCheckPersonIsFollowedByAuthenticatedRequest extends SpeakeasyBase {
    username: string;
}
export declare class UsersCheckPersonIsFollowedByAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
