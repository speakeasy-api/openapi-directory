import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposSetTeamAccessRestrictionsRequestBody1 extends SpeakeasyBase {
    /**
     * teams parameter
     */
    teams: string[];
}
export declare class ReposSetTeamAccessRestrictionsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * The name of the branch.
     */
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposSetTeamAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teams?: shared.Team[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
