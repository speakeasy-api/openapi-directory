import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesPublishForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * A name for the new repository.
     */
    name?: string;
    /**
     * Whether the new repository should be private.
     */
    private?: boolean;
}
export declare class CodespacesPublishForAuthenticatedUserRequest extends SpeakeasyBase {
    requestBody: CodespacesPublishForAuthenticatedUserRequestBody;
    /**
     * The name of the codespace.
     */
    codespaceName: string;
}
export declare class CodespacesPublishForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codespaceWithFullRepository?: shared.CodespaceWithFullRepository;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
