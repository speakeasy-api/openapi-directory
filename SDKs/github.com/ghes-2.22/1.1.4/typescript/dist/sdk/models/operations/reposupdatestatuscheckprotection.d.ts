import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposUpdateStatusCheckProtectionRequestBody extends SpeakeasyBase {
    /**
     * The list of status checks to require in order to merge into this branch
     */
    contexts?: string[];
    /**
     * Require branches to be up to date before merging.
     */
    strict?: boolean;
}
export declare class ReposUpdateStatusCheckProtectionRequest extends SpeakeasyBase {
    requestBody?: ReposUpdateStatusCheckProtectionRequestBody;
    /**
     * The name of the branch.
     */
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposUpdateStatusCheckProtectionResponse extends SpeakeasyBase {
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
    statusCheckPolicy?: shared.StatusCheckPolicy;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
