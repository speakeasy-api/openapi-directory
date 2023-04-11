import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityGetRepoSubscriptionRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityGetRepoSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * if you subscribe to the repository
     */
    repositorySubscription?: shared.RepositorySubscription;
}
