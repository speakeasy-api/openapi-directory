import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesUpdateForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * Display name for this codespace
     */
    displayName?: string;
    /**
     * A valid machine to transition this codespace to.
     */
    machine?: string;
    /**
     * Recently opened folders inside the codespace. It is currently used by the clients to determine the folder path to load the codespace in.
     */
    recentFolders?: string[];
}
export declare class CodespacesUpdateForAuthenticatedUserRequest extends SpeakeasyBase {
    requestBody?: CodespacesUpdateForAuthenticatedUserRequestBody;
    /**
     * The name of the codespace.
     */
    codespaceName: string;
}
export declare class CodespacesUpdateForAuthenticatedUserResponse extends SpeakeasyBase {
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
    codespace?: shared.Codespace;
}
