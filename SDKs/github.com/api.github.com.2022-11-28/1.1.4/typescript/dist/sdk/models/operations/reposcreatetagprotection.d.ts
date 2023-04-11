import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateTagProtectionRequestBody extends SpeakeasyBase {
    /**
     * An optional glob pattern to match against when enforcing tag protection.
     */
    pattern: string;
}
export declare class ReposCreateTagProtectionRequest extends SpeakeasyBase {
    requestBody: ReposCreateTagProtectionRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposCreateTagProtectionResponse extends SpeakeasyBase {
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
    tagProtection?: shared.TagProtection;
}
