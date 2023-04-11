import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposAddAppAccessRestrictionsRequestBody1 extends SpeakeasyBase {
    /**
     * apps parameter
     */
    apps: string[];
}
export declare class ReposAddAppAccessRestrictionsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * The name of the branch.
     */
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposAddAppAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    integrations?: shared.Integration[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
