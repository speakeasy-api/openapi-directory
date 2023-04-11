import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetUsersWithAccessToProtectedBranchRequest extends SpeakeasyBase {
    /**
     * The name of the branch.
     */
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetUsersWithAccessToProtectedBranchResponse extends SpeakeasyBase {
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
    simpleUsers?: shared.SimpleUser[];
}
