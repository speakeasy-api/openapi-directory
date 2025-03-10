import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposAddUserAccessRestrictionsRequestBody1 extends SpeakeasyBase {
    /**
     * users parameter
     */
    users: string[];
}
export declare class ReposAddUserAccessRestrictionsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * The name of the branch.
     */
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposAddUserAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    simpleUsers?: shared.SimpleUser[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
