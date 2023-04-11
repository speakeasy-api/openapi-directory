import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserGetMembershipDataByIdRequest extends SpeakeasyBase {
    /**
     * The membership ID of the target user.
     */
    membershipId: number;
    /**
     * Type of the supplied membership ID.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class UserGetMembershipDataById200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.UserUserMembershipData;
    throttleSeconds?: number;
}
export declare class UserGetMembershipDataByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
