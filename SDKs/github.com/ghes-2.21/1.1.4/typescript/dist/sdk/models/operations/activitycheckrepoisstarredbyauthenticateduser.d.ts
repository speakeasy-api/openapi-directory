import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityCheckRepoIsStarredByAuthenticatedUserRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityCheckRepoIsStarredByAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
