import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MigrationsMapCommitAuthorRequestBody extends SpeakeasyBase {
    /**
     * The new Git author email.
     */
    email?: string;
    /**
     * The new Git author name.
     */
    name?: string;
}
export declare class MigrationsMapCommitAuthorRequest extends SpeakeasyBase {
    requestBody?: MigrationsMapCommitAuthorRequestBody;
    authorId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class MigrationsMapCommitAuthorResponse extends SpeakeasyBase {
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
    porterAuthor?: shared.PorterAuthor;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
