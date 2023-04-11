import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserGetBungieNetUserByIdRequest extends SpeakeasyBase {
    /**
     * The requested Bungie.net membership id.
     */
    id: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class UserGetBungieNetUserById200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.UserGeneralUser;
    throttleSeconds?: number;
}
export declare class UserGetBungieNetUserByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
