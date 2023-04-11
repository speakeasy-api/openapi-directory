import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrganizationMembersRequest extends SpeakeasyBase {
    /**
     * The identifier of the Organization.
     */
    organizationId: string;
}
export declare class GetOrganizationMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    userModels?: shared.UserModel[];
}
