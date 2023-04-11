import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesSetCodespacesBillingUsersRequestBody extends SpeakeasyBase {
    /**
     * The usernames of the organization members whose codespaces be billed to the organization.
     */
    selectedUsernames: string[];
}
export declare class CodespacesSetCodespacesBillingUsersRequest extends SpeakeasyBase {
    requestBody: CodespacesSetCodespacesBillingUsersRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class CodespacesSetCodespacesBillingUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
