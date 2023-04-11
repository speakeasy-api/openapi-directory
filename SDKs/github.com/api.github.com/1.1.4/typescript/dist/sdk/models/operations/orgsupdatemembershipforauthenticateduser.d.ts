import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state that the membership should be in. Only `"active"` will be accepted.
 */
export declare enum OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum {
    Active = "active"
}
export declare class OrgsUpdateMembershipForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * The state that the membership should be in. Only `"active"` will be accepted.
     */
    state: OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum;
}
export declare class OrgsUpdateMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
    requestBody: OrgsUpdateMembershipForAuthenticatedUserRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OrgsUpdateMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    orgMembership?: shared.OrgMembership;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
