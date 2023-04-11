import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposRemoveAppAccessRestrictionsRequestBody1 extends SpeakeasyBase {
    /**
     * apps parameter
     */
    apps: string[];
}
export declare class ReposRemoveAppAccessRestrictionsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * The name of the branch.
     */
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposRemoveAppAccessRestrictionsResponse extends SpeakeasyBase {
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
