import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The system role from which this role inherits permissions.
 */
export declare enum OrgsUpdateCustomRoleRequestBodyBaseRoleEnum {
    Read = "read",
    Triage = "triage",
    Write = "write",
    Maintain = "maintain"
}
export declare class OrgsUpdateCustomRoleRequestBody extends SpeakeasyBase {
    /**
     * The system role from which this role inherits permissions.
     */
    baseRole?: OrgsUpdateCustomRoleRequestBodyBaseRoleEnum;
    /**
     * A short description about who this role is for or what permissions it grants.
     */
    description?: string;
    /**
     * The name of the custom role.
     */
    name?: string;
    /**
     * A list of additional permissions included in this role. If specified, these permissions will replace any currently set on the role.
     */
    permissions?: string[];
}
export declare class OrgsUpdateCustomRoleRequest extends SpeakeasyBase {
    requestBody: OrgsUpdateCustomRoleRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the role.
     */
    roleId: number;
}
export declare class OrgsUpdateCustomRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    organizationCustomRepositoryRole?: shared.OrganizationCustomRepositoryRole;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
