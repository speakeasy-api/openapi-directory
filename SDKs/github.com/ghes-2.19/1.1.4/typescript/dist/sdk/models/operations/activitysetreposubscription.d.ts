import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivitySetRepoSubscriptionRequestBody extends SpeakeasyBase {
    /**
     * Determines if all notifications should be blocked from this repository.
     */
    ignored?: boolean;
    /**
     * Determines if notifications should be received from this repository.
     */
    subscribed?: boolean;
}
export declare class ActivitySetRepoSubscriptionRequest extends SpeakeasyBase {
    requestBody?: ActivitySetRepoSubscriptionRequestBody;
    owner: string;
    repo: string;
}
export declare class ActivitySetRepoSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    repositorySubscription?: shared.RepositorySubscription;
}
