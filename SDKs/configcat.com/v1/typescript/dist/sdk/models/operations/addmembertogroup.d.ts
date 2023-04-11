import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddMemberToGroupRequest extends SpeakeasyBase {
    addUserToGroupRequest: shared.AddUserToGroupRequest;
    /**
     * The identifier of the Organization.
     */
    organizationId: string;
    /**
     * The identifier of the Member.
     */
    userId: string;
}
export declare class AddMemberToGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
