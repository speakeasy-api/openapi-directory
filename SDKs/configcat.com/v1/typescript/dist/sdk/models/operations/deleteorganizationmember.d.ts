import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationMemberRequest extends SpeakeasyBase {
    /**
     * The identifier of the Organization.
     */
    organizationId: string;
    /**
     * The identifier of the Member.
     */
    userId: string;
}
export declare class DeleteOrganizationMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
