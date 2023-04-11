import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The system role from which this role inherits permissions.
 */
export declare enum OrgsCreateCustomRoleRequestBodyBaseRoleEnum {
    Read = "read",
    Triage = "triage",
    Write = "write",
    Maintain = "maintain"
}
export declare class OrgsCreateCustomRoleRequestBody extends SpeakeasyBase {
    /**
     * The system role from which this role inherits permissions.
     */
    baseRole: OrgsCreateCustomRoleRequestBodyBaseRoleEnum;
    /**
     * A short description about the intended usage of this role or what permissions it grants.
     */
    description?: string;
    /**
     * The name of the custom role.
     */
    name: string;
    /**
     * A list of additional permissions included in this role.
     */
    permissions: string[];
}
export declare class OrgsCreateCustomRoleRequest extends SpeakeasyBase {
    requestBody: OrgsCreateCustomRoleRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OrgsCreateCustomRoleResponse extends SpeakeasyBase {
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
