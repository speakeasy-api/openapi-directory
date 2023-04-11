import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InviteMemberRequest extends SpeakeasyBase {
    inviteMembersRequest: shared.InviteMembersRequest;
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class InviteMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
